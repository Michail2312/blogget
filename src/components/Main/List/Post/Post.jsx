import PropTypes from "prop-types";

import TitlePost from "./TitlePost";
import RatingPost from "./RatingPost";
import TimeCreatePost from "./TimeCreatePost";
import { ReactComponent as NotFoto } from "../../../../img/notphoto.jpg.svg";
import { ReactComponent as DeletePostIcon } from "../../../../img/deletePost.svg";
import style from "./Post.module.css";

export const Post = ({ postsData }) => {
  const { title, author, ups, created } = postsData;

  return (
    <li className={style.post}>
      <NotFoto className={style.img} />
      <TitlePost title={title} author={author} />
      <RatingPost ups={ups} />
      <TimeCreatePost date={created} />
      <button
        className={style.delete}
        onClick={() => {
          console.log("DeletePostIcon");
        }}
      >
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
  created: PropTypes.number,
};
