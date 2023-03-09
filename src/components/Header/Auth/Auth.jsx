import { useEffect, useState } from "react";
import style from "./Auth.module.css";
import PropTypes from "prop-types";
import { ReactComponent as LoginIcon } from "../../../img/login.svg";
import { urlAuth } from "../../../api/auth";
import { Text } from "../../UI/Text/Text";
import { URL_API } from "../../../api/const";
import { ButtonLogOut } from "../ButtonLogOut/ButtonLogOut";

export const Auth = ({ token, deleteToken }) => {
  const [auth, setAuth] = useState({});
  const [logOut, setLogOut] = useState(false);
  useEffect(() => {
    if (!token) {
      return;
    }
    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then(({ name, icon_img: iconImg }) => {
        const img = iconImg.replace(/\?.*$/, "");
        setAuth({ name, img });
      })
      .catch((err) => {
        console.error(err);
        localStorage.removeItem("bearer");
        setAuth({});
      });
  }, [token]);

  return (
    <div className={style.container}>
      {auth.name ? (
        <button className={style.btn} onClick={() => setLogOut(!logOut)}>
          <img
            className={style.img}
            src={auth.img}
            title={auth.name}
            alt={`Avatar ${auth.name}`}
          />
        </button>
      ) : (
        <Text className={style.authLink} As="a" href={urlAuth}>
          <LoginIcon className={style.svg} />
        </Text>
      )}
      {logOut ? <ButtonLogOut deleteToken={deleteToken} /> : null}
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  deleteToken: PropTypes.func,
};
