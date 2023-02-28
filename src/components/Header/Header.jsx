import style from "./Header.module.css";
import Layout from "../Layout";
import Logo from "./Logo";
import Heading from "./Hading";
import Search from "./Search";
import Auth from "./Auth";

const heading = "Главная"; // типо ответ от сервера :)

export const Header = () => {
  return (
    <header className={style.header}>
      <Layout>
        <div className={style.gridContainer}>
          <Logo />
          <Heading heading={heading} />
          <Search />
          <Auth auth="BUKA" />
        </div>
      </Layout>
    </header>
  );
};
