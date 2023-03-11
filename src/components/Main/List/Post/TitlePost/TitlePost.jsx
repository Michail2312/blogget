import React from "react";
import PropTypes from "prop-types";
import { Text } from "../../../../UI/Text/Text";

import style from "./TitlePost.module.css";

export const TitlePost = ({ title, author }) => (
  <div className={style.content}>
    <Text As="h2" className={style.title}>
      <Text
        As="a"
        size={18}
        tsize={24}
        className={style.linkPost}
        href="#post"
        fontWeight={900}
        onClick={() => {
          console.log("CLICK");
        }}
      >
        {title}
      </Text>
    </Text>
    <Text
      As="a"
      size={12}
      tsize={14}
      color="orange"
      className={style.linkAuthor}
      href="#author"
    >
      {author}
    </Text>
  </div>
);

TitlePost.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};
