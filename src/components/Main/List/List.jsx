import React from "react";
import Post from "./Post";
import style from "./List.module.css";

export const List = (props) => {
  const postData = {
    title: "Title",
    author: "NICK NAME",
    ups: 24,
    date: "2023-03-04T19:09:00.000",
  };
  return (
    <ul className={style.list}>
      <Post postData={postData} />
    </ul>
  );
};
