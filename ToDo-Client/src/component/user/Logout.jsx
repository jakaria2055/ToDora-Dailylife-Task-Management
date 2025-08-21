import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import UserStore from "../../store/UserStore";

function Logout() {
  const navigate = useNavigate();
  const { UserLogoutRequest } = UserStore();

  useEffect(() => {
    (async () => {
      const res = await UserLogoutRequest();
      sessionStorage.clear();
      localStorage.clear();
      if (res) {
        toast.success("Logged out successfully");
        navigate("/islogeout");
      } else {
        toast.error("Something went wrong");
      }
    })();
  }, []);

  return <div>Logging out...</div>;
}

export default Logout;
