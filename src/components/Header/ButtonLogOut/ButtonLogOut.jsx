import React from "react";
import style from "./ButtonLogOut.module.css";
import PropTypes from "prop-types";

export const ButtonLogOut = ({ deleteToken }) => (
  <button className={style.logout} onClick={deleteToken}>
    Выйти
  </button>
);

ButtonLogOut.propTypes = { deleteToken: PropTypes.func };
