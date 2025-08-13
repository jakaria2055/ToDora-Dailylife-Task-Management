import React from "react";
import UserSubmitButton from "./UserSubmitButton";
import UserStore from "../../store/UserStore";
import toast from "react-hot-toast";
import ValidationHelper from "../../utility/ValidationHelper";
import { useNavigate } from "react-router-dom";

function CreateUserForm() {
  let navigate = useNavigate();
  const { UserFormData, UserFormChange, UserCreateRequest } = UserStore();

  const onFormSubmit = async () => {
    if (!ValidationHelper.IsEmail(UserFormData.email)) {
      toast.error("Valid email address required!");
    } else {
      let res = await UserCreateRequest(UserFormData);
      if (res) {
        UserStore.getState().VerifyFormChange("email", UserFormData.email);
        navigate("/otp");
        toast.success("OTP send to your mail");
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <>
      <div className=" flex justify-center items-center min-h-screen">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Login</legend>

          <label className="label">Email</label>
          <input
            value={UserFormData.email}
            onChange={(e) => UserFormChange("email", e.target.value)}
            type="email"
            className="input"
            placeholder="Email"
            required
          />

          <label className="label">Password</label>
          <input
            value={UserFormData.password}
            onChange={(e) => UserFormChange("password", e.target.value)}
            type="password"
            className="input mb-2"
            placeholder="Password"
            required
          />

          <UserSubmitButton
            onClick={onFormSubmit}
            className="w-full mt-6 bg-green-950 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            text="Next"
          />
        </fieldset>
      </div>
    </>
  );
}

export default CreateUserForm;
