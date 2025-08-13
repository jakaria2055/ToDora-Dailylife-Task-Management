import React, { Children } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

function Layout(props) {
  return (
    <>
      <Navbar />
        <Toaster position="top-center"/>
       {props.children}
      <Footer />
    </>
  );
}

export default Layout;
