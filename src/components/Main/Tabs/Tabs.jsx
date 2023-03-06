import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import style from "./Tabs.module.css";
import { assaingId } from "../../../utils/generateRandomId";
import { debounceRaf } from "../../../utils/debounce";

import { ReactComponent as ArrowIcon } from "../../../img/arrow.svg";
import { ReactComponent as HomeIcon } from "../../../img/home.svg";
import { ReactComponent as TopIcon } from "../../../img/top.svg";
import { ReactComponent as BestIcon } from "../../../img/best.svg";
import { ReactComponent as HotIcon } from "../../../img/hot.svg";

const LIST = [
  { value: "Главная", Icon: HomeIcon },
  { value: "Топ", Icon: TopIcon },
  { value: "Сохраненные", Icon: BestIcon },
  { value: "Мои посты", Icon: HotIcon },
].map(assaingId);

export const Tabs = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);

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

  return (
    <div className={style.container}>
      {isDropDown && (
        <div className={style.wrapperBtn}>
          <button
            className={style.btn}
            onClick={() => setIsDropDownOpen(!isDropDownOpen)}
          >
            МЕНЮ
            <ArrowIcon width={15} height={15} />
          </button>
        </div>
      )}
      {(isDropDownOpen || !isDropDown) && (
        <ul className={style.list}>
          {LIST.map(({ value, id, Icon }) => (
            <li key={id} className={style.item}>
              <button
                className={style.btn}
                onClick={() => setIsDropDownOpen(false)}
              >
                {value}
                {Icon && <Icon width={30} height={30} />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Tabs.propTypes = { list: PropTypes.array, setList: PropTypes.func };
