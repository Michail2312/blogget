import React from "react";
import style from "./Hading.module.css";

export const Hading = ({ heading }) => {
  return <h1 className={style.heading}>{heading}</h1>;
};
