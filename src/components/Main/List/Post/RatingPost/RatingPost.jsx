import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as UpRating } from "../../../../../img/up.svg";
import { ReactComponent as DownRating } from "../../../../../img/down.svg";

import style from "./RatingPost.module.css";
import { Text } from "../../../../UI/Text/Text";

export const RatingPost = ({ ups }) => (
  <div className={style.rating}>
    <button className={style.up} aria-label="Увеличить рейтинг">
      <UpRating />
    </button>
    <Text className={style.ups}>{ups}</Text>
    <button className={style.down} aria-label="Уменьшить рейтинг">
      <DownRating />
    </button>
  </div>
);

RatingPost.propTypes = {
  ups: PropTypes.number,
};
