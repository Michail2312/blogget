import React from "react";
import style from "./Heading.module.css";
import PropTypes from "prop-types";
export const Heading = ({ heading }) => (
  <h1 className={style.heading}>{heading}</h1>
);

Heading.propTypes = {
  heading: PropTypes.string,
};
