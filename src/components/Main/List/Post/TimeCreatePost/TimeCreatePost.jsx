import React from "react";
import PropTypes from "prop-types";

import style from "./TimeCreatePost.module.css";
import formatDate from "../../../../../utils/formatDate";

export const TimeCreatePost = ({ date }) => (
  <time className={style.date} dateTime={date}>
    {formatDate(date)}
  </time>
);

TimeCreatePost.propTypes = {
  date: PropTypes.number,
};
