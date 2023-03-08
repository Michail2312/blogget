import style from "./Header.module.css";
import Layout from "../Layout";
import Logo from "./Logo";
import Heading from "./Heading";
import Search from "./Search";
import Auth from "./Auth";
import PropTypes from "prop-types";

const heading = "Главная"; // типо ответ от сервера :)

export const Header = ({ token, deleteToken }) => (
  <header className={style.header}>
    <Layout>
      <div className={style.gridContainer}>
        <Logo />
        <Heading heading={heading} />
        <Search />
        <Auth token={token} deleteToken={deleteToken} />
      </div>
    </Layout>
  </header>
);

Header.propTypes = {
  token: PropTypes.string,
  deleteToken: PropTypes.func,
};
