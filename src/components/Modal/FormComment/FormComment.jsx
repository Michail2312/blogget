import React from "react";
import { useRef } from "react";
import style from "./FormComment.module.css";
import { Text } from "../../../UI/Text/Text";

export const FormComment = (props) => {
  const commentRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(commentRef.current.value);
  };
  console.log(commentRef.current);
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <Text As="h3" size={14} tsize={18}>
        Имя авторизованного пользователя
      </Text>
      <textarea
        ref={commentRef}
        className={style.textarea}
        autoFocus
      ></textarea>
      <button className={style.btn}>Отправить</button>
    </form>
  );
};
