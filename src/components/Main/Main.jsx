import React from "react";
import Layout from "../Layout";
import style from "./Main.module.css";

export const Main = (props) => (
  <main className={style.main}>
    <Layout>
      <p>сайдбар?</p>
      <p> контент(список, слайдер, таблица)?</p>
      <p> футер?</p>
    </Layout>
  </main>
);
