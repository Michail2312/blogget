import React from "react";
import PropTypes from "prop-types";

import TittlePost from "./TitlePost";
import RatingPost from "./RatingPost";
import TimeCreatePost from "./TimeCreatePost";
import notphoto from "./img/notphoto.jpg";
import deletePostIcon from "../../../../utils/deletPostIcon";
import style from "./Post.module.css";

export const Post = ({ postData }) => {
  const { title, author, ups, date } = postData;

  return (
    <li className={style.post}>
      <img className={style.img} src={notphoto} alt={title} />
      <TittlePost title={title} author={author} />
      <RatingPost ups={ups} />
      <TimeCreatePost date={date} />
      <button className={style.delete}>{deletePostIcon()}</button>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
