// import { useEffect } from "react";
import { useGetComments } from "../../../..//hooks/useGetComments";

import PropTypes from "prop-types";
import TitlePost from "./TitlePost";
import RatingPost from "./RatingPost";
import TimeCreatePost from "./TimeCreatePost";
import { ReactComponent as NotPhoto } from "../../../../img/notphoto.jpg.svg";
import { ReactComponent as DeletePostIcon } from "../../../../img/deletePost.svg";
import style from "./Post.module.css";

export const Post = ({ postsData }) => {
  const { title, author, ups, thumbnail, created, id } = postsData;

  const [commentsData] = useGetComments(id);
  const { post, comments } = commentsData;
  return (
    <li className={style.post}>
      {thumbnail === "default" || thumbnail === "self" ? (
        <NotPhoto className={style.img} />
      ) : (
        <img src={thumbnail} alt="avatar" />
      )}

      <TitlePost
        title={title}
        author={author}
        post={post}
        comments={comments}
      />
      <RatingPost ups={ups} />
      <TimeCreatePost date={created} />
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
  created: PropTypes.number,
  id: PropTypes.number,
};
