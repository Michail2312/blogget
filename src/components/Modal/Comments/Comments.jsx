import PropTypes from "prop-types";
import formatDate from "../../../utils/formatDate";

import style from "./Comments.module.css";

export const Comments = ({ comments }) => (
  <ul className={style.list}>
    {!comments.length ? (
      <p>Not comments</p>
    ) : (
      comments.map((item) => {
        const date = formatDate(item.created);
        return (
          <li className={style.item} key={item.id}>
            <h2 className={style.author}>{item.author}</h2>
            <p>{date}</p>
            <p>{item.body}</p>
          </li>
        );
      })
    )}
  </ul>
);

Comments.propTypes = {
  comments: PropTypes.array,
  title: PropTypes.string,
};
