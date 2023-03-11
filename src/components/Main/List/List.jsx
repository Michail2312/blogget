import { useContext } from "react";
import { postsContext } from "../../../context/postsContext.js";
import Post from "./Post";
import style from "./List.module.css";

export const List = () => {
  const [postsBest] = useContext(postsContext);
  // const postsData = [
  //   {
  //     title: "Title1",
  //     author: "NICK NAME",
  //     ups: 77,
  //     date: "2023-03-04T19:09:00.000",
  //   },
  //   {
  //     title: "Title2",
  //     author: "NICK NAME",
  //     ups: 58,
  //     date: "2023-03-04T19:09:00.000",
  //   },
  //   {
  //     title: "Title3",
  //     author: "NICK NAME",
  //     ups: 24,
  //     date: "2023-03-04T19:09:00.000",
  //   },
  //   {
  //     title: "Title4",
  //     author: "NICK NAME",
  //     ups: 124,
  //     date: "2023-03-04T19:09:00.000",
  //   },
  // ];
  return (
    <ul className={style.list}>
      {postsBest.map((item) => (
        <Post postsData={item.data} key={item.data.id} />
      ))}
    </ul>
  );
};
