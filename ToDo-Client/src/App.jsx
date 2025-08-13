import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import CreateUser from "./page/CreateUser";
import OTPForm from "./component/user/OTPForm";
import LoginForm from "./component/user/LoginForm";
import Logout from "./component/user/Logout";
import IsLogedoutSkeleton from "./skeleton/IsLogedoutSkeleton";
import AddTask from "./page/AddTask";
import EditTask from "./page/EditTask";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/islogeout" element={<IsLogedoutSkeleton />} />
        <Route path="/otp" element={<OTPForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="/addtask" element={<AddTask/>} />
         <Route path="/edittask/:id" element={<EditTask/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
