import Cookies from "js-cookie";
import { create } from "zustand";
import axios from "axios";
import { setEmail } from "../utility/utility";

const UserStore = create((set) => ({
  isLogin: () => {
    return !!Cookies.get("accesstoken");
  },

  UserFormData: { email: "", password: "" },
  UserFormChange: (name, value) => {
    set((state) => ({
      UserFormData: {
        ...state.UserFormData,
        [name]: value,
      },
    }));
  },

  VerifyFormData: { email: "", otp: "" },
  VerifyFormChange: (name, value) => {
    set((state) => ({
      VerifyFormData: {
        ...state.VerifyFormData,
        [name]: value,
      },
    }));
  },

  isFormSubmit: false,
  UserCreateRequest: async (postBody) => {
    set({ isFormSubmit: true });
    let res = await axios.post(`/api/v1/auth/register`, postBody);
    setEmail(postBody.email);
    set((state) => ({
      VerifyFormData: { ...state.VerifyFormData, email: postBody.email },
    }));

    set({ isFormSubmit: false });
    return res.data["status"] == "success";
  },

  VerifyOTPRequest: async (postBody) => {
    set({ isFormSubmit: true });
    let res = await axios.post(`/api/v1/auth/verify`, postBody);
    set({ isFormSubmit: false });
    return res.data["status"] === "success";
  },

  LoginRequest: async (postBody) => {
    set({ isFormSubmit: true });
    let res = await axios.post(`/api/v1/auth/login`, postBody);
    set({ isFormSubmit: false });
    return res.data["status"] === "success";
  },

  UserLogoutRequest: async () => {
    set({ isFormSubmit: true });
    try {
      // Just call logout, backend will get refreshtoken from cookies
      let res = await axios.post(
        `/api/v1/auth/logout`,
        {},
        { withCredentials: true }
      );
      set({ isFormSubmit: false });
      return res.data["status"] === "success";
    } catch (e) {
      set({ isFormSubmit: false });
      return false;
    }
  },
}));

export default UserStore;
