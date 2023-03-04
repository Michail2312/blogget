import React from "react";
import PropTypes from "prop-types";

import style from "./TitlePost.module.css";

export const TitlePost = ({ title, author }) => (
  <div className={style.content}>
    <h2 className={style.title}>
      <a className={style.linkPost} href="#post">
        {title}
      </a>
    </h2>
    <a className={style.linkAuthor} href="#author">
      {author}
    </a>
  </div>
);

TitlePost.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};
