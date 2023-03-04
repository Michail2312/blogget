import React from "react";
import PropTypes from "prop-types";

import style from "./RatingPost.module.css";

export const RatingPost = ({ ups }) => (
  <div className={style.rating}>
    <button className={style.up} aria-label="Увеличить рейтинг" />
    <p className={style.ups}>{ups}</p>
    <button className={style.down} aria-label="Уменьшить рейтинг" />
  </div>
);

RatingPost.propTypes = {
  ups: PropTypes.number,
};
