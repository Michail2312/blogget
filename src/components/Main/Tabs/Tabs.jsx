import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import style from "./Tabs.module.css";
import { assaingId } from "../../../utils/generateRandomId";
import { debounceRaf } from "../../../utils/debounce";
import { Text } from "../../UI/Text/Text";

import { ReactComponent as ArrowIcon } from "../../../img/arrow.svg";
import { ReactComponent as HomeIcon } from "../../../img/home.svg";
import { ReactComponent as TopIcon } from "../../../img/top.svg";
import { ReactComponent as BestIcon } from "../../../img/best.svg";
import { ReactComponent as HotIcon } from "../../../img/hot.svg";

const LIST = [
  { value: "Главная", Icon: HomeIcon },
  { value: "Топ", Icon: TopIcon },
  { value: "Лучшие", Icon: BestIcon },
  { value: "Горячие", Icon: HotIcon },
].map(assaingId);

export const Tabs = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);
  const [isDropDownNameMenu, setIsDropDownNameMenu] = useState("Главная");

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropDown(true);
    } else {
      setIsDropDown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    handleResize();
    window.addEventListener("resize", debounceResize);
    return () => {
      window.removeEventListener("resize", debounceResize);
    };
  }, []);

  const toggleMenu = (value) => {
    setIsDropDownOpen(false);
    setIsDropDownNameMenu(value);
  };

  return (
    <div className={style.container}>
      {isDropDown && (
        <div className={style.wrapperBtn}>
          <button
            className={style.btn}
            onClick={() => setIsDropDownOpen(!isDropDownOpen)}
          >
            {isDropDownNameMenu}
            <ArrowIcon width={15} height={15} />
          </button>
        </div>
      )}
      {(isDropDownOpen || !isDropDown) && (
        <ul className={style.list}>
          {LIST.map(({ value, id, Icon }) => (
            <Text As="li" key={id} className={style.item}>
              <button className={style.btn} onClick={() => toggleMenu(value)}>
                {value}
                {Icon && <Icon width={30} height={30} />}
              </button>
            </Text>
          ))}
        </ul>
      )}
    </div>
  );
};

Tabs.propTypes = { list: PropTypes.array, setList: PropTypes.func };
