import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Products } from "./Products";
import { Productpage } from "./Productpage";
import { Outlet } from "react-router-dom";

 function Layout(){
  return(
      <div>
      <Header />
      <Outlet />
      <Footer />
      </div>
    )
  }

export default Layout;