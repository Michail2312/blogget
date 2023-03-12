import ReactDOM from "react-dom";
import { useEffect, useRef } from "react";

import Markdown from "markdown-to-jsx";
import style from "./Modal.module.css";
import PropTypes from "prop-types";

import { ReactComponent as CloseIcon } from "../../img/close.svg";
import { Comments } from "./Comments/Comments";

export const Modal = ({ closeModal, post, comments }) => {
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
          {post.title}
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
              {post.selftext || " "}
            </Markdown>
          </div>
          <p className={style.author}>{post.author}</p>
        </h2>
        <Comments comments={comments} title={post.title} />
        <button className={style.close} onClick={() => closeModal()}>
          <CloseIcon />
        </button>
      </div>
    </div>,
    document.querySelector("#modal-root"),
  );
};

Modal.propTypes = {
  markdown: PropTypes.string,
  closeModal: PropTypes.func,
  id: PropTypes.string,
};
