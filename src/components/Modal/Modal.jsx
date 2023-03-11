import ReactDOM from "react-dom";
import { useEffect, useRef } from "react";

import Markdown from "markdown-to-jsx";
import style from "./Modal.module.css";
import PropTypes from "prop-types";

import { ReactComponent as CloseIcon } from "../../img/close.svg";

export const Modal = ({ title, author, markdown, closeModal }) => {
  const overlayRef = useRef();
  const handleClick = (e) => {
    const target = e.target;
    if (target === overlayRef.current || e.code === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleClick);
    };
  }, []);
  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        <h2 className={style.title}>
          {title}
          <div className={style.content}>
            <Markdown
              options={{
                overrides: {
                  a: {
                    props: {
                      target: "_blanck",
                    },
                  },
                },
              }}
            >
              {markdown}
            </Markdown>
          </div>
          <p className={style.author}>{author}</p>
        </h2>
        <button className={style.close} onClick={() => closeModal()}>
          <CloseIcon />
        </button>
      </div>
    </div>,
    document.querySelector("#modal-root"),
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  closeModal: PropTypes.func,
};
