import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as UpRating } from "../../../../../img/up.svg";
import { ReactComponent as DownRating } from "../../../../../img/down.svg";

import style from "./RatingPost.module.css";

export const RatingPost = ({ ups }) => (
  <div className={style.rating}>
    <button className={style.up} aria-label="Увеличить рейтинг">
      <UpRating />
    </button>
    <p className={style.ups}>{ups}</p>
    <button className={style.down} aria-label="Уменьшить рейтинг">
      <DownRating />
    </button>
  </div>
);

RatingPost.propTypes = {
  ups: PropTypes.number,
};
