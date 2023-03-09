import { useState, useContext } from "react";
import style from "./Auth.module.css";
import PropTypes from "prop-types";
import { ReactComponent as LoginIcon } from "../../../img/login.svg";
import { urlAuth } from "../../../api/auth";
import { Text } from "../../UI/Text/Text";
import { tokenContext } from "../../../context/tokenContext";
import { authContext } from "../../../context/authContext";

export const Auth = () => {
  const { deleteToken } = useContext(tokenContext);
  const [showLogOut, setShowLogOut] = useState(false);
  const { auth, clearAuth } = useContext(authContext);
  const getOut = () => {
    setShowLogOut(!showLogOut);
  };
  const logOut = () => {
    deleteToken();
    clearAuth();
  };

  return (
    <div className={style.container}>
      {auth.name ? (
        <button className={style.btn} onClick={getOut}>
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
      {showLogOut ? (
        <button className={style.logout} onClick={logOut}>
          ВЫЙТИ
        </button>
      ) : null}
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  deleteToken: PropTypes.func,
};
