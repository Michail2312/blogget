import React from "react";
import style from "./Logo.module.css";
import { SVG } from "../../UI/Svg/SVG";
import logo from "../../../img/logo.svg";

export const Logo = () => (
  <a className={style.link} href="/">
    <SVG src={logo} />
  </a>
);
