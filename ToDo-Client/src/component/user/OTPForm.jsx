import React from "react";
import { useNavigate } from "react-router-dom";
import UserStore from "../../store/UserStore";
import toast from "react-hot-toast";
import ValidationHelper from "../../utility/ValidationHelper";
import UserSubmitButton from "./UserSubmitButton";

function OTPForm() {
  let navigate = useNavigate();

  let { VerifyFormData, VerifyFormChange, VerifyOTPRequest } = UserStore();

  const onFormSubmit = async () => {
    if (ValidationHelper.IsEmpty(VerifyFormData.otp)) {
      toast.error("Invalid OTP");
    } else {
      let res = await VerifyOTPRequest(VerifyFormData);
      console.log(res)
      res ? navigate("/login") : toast.error("Something went wrong!");
    }
  };


  return (
    <>
      <div className=" flex justify-center items-center min-h-screen">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Verify</legend>

          <label className="label">Email</label>
          <input
            value={VerifyFormData.email}
            onChange={(e) => VerifyFormChange("email", e.target.value)}
            type="email"
            className="input"
            placeholder="Email"
            required
          />

          <label className="label">O.T.P</label>
          <input
            value={VerifyFormData.otp}
            onChange={(e) => VerifyFormChange("otp", e.target.value)}
            type="text"
            className="input mb-2"
            placeholder="Enter OTP"
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

export default OTPForm;
