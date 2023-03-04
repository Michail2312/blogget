import React from "react";
import Post from "./Post";
import style from "./List.module.css";

export const List = (props) => {
  const postData = {
    title: "Title",
    author: "NICK NAME",
    ups: 24,
    date: "2023-03-04T09:45:00.000Z",
  };
  return (
    <ul className={style.list}>
      <Post postData={postData} />
    </ul>
  );
};
