import React from "react";
import style from "./Layout.module.css";

export const Layout = ({ children }) => {
  return <p className={style.container}>{children}</p>;
};
