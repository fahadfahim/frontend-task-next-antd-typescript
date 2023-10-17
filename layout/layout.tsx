import Footer from "@/component/footer/footer";
import SecondNav from "@/component/navbar/secondNav";
import TopNav from "@/component/navbar/topNav";
import React from "react";

const Layout = ({ children }: any) => {
  return (
    <>
      <TopNav />
      <SecondNav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
