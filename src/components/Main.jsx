import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
function Main() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}

export default Main;
