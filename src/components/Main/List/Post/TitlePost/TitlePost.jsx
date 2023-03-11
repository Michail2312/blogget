import { useState } from "react";
import PropTypes from "prop-types";
import { Text } from "../../../../../UI/Text/Text";
import { Modal } from "../../../../Modal/Modal";

import style from "./TitlePost.module.css";

export const TitlePost = ({ title, author, markdown }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className={style.content}>
      <Text As="h2" className={style.title}>
        <Text
          As="a"
          size={18}
          tsize={24}
          className={style.linkPost}
          href="#post"
          fontWeight={900}
          onClick={() => {
            setIsOpenModal(true);
          }}
        >
          {title}
        </Text>
      </Text>
      <Text
        As="a"
        size={12}
        tsize={14}
        color="orange"
        className={style.linkAuthor}
        href="#author"
      >
        {author}
      </Text>
      {isOpenModal && (
        <Modal
          title={title}
          author={author}
          markdown={markdown}
          closeModal={() => setIsOpenModal(false)}
        />
      )}
    </div>
  );
};

TitlePost.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
};
