import PropTypes from "prop-types";

import style from "./Comments.module.css";

export const Comments = ({ comments, title }) => (
  <ul className={style.list}>
    {!comments.length ? (
      <p>Not comments</p>
    ) : (
      comments.map((item) => (
        <li className={style.item} key={item.id}>
          <h2 className={style.author}>{item.author}</h2>
          <h2>{title}</h2>
          <p>{item.body}</p>
        </li>
      ))
    )}
  </ul>
);

Comments.propTypes = {
  comments: PropTypes.array,
  title: PropTypes.string,
};
