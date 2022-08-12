import React from "react";
import Header from "./Header";
import Trending from "./Trending";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Trending />
      <div>{children}</div>
    </>
  );
};

export default Layout;
