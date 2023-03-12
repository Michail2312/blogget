import { useContext } from "react";
import { postsContext } from "../../../context/postsContext.js";
import Post from "./Post";
import style from "./List.module.css";

export const List = () => {
  const [postsBest] = useContext(postsContext);

  return (
    <ul className={style.list}>
      {postsBest.map((item) => (
        <Post postsData={item.data} key={item.data.id} />
      ))}
    </ul>
  );
};
