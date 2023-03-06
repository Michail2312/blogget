import React from "react";
import PropTypes from "prop-types";

import TittlePost from "./TitlePost";
import RatingPost from "./RatingPost";
import TimeCreatePost from "./TimeCreatePost";
import notphoto from "./img/notphoto.jpg";
import { ReactComponent as DeletePostIcon } from "../Post/img/delete.svg";
import style from "./Post.module.css";

export const Post = ({ postsData }) => {
  const { title, author, ups, date } = postsData;

  return (
    <li className={style.post}>
      <img className={style.img} src={notphoto} alt={title} />
      <TittlePost title={title} author={author} />
      <RatingPost ups={ups} />
      <TimeCreatePost date={date} />
      <button className={style.delete}>
        <DeletePostIcon />
      </button>
    </li>
  );
};

Post.propTypes = {
  postsData: PropTypes.object,
  title: PropTypes.string,
  author: PropTypes.string,
  ups: PropTypes.string,
  date: PropTypes.string,
};
