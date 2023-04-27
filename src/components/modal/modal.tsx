/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
import ReactDOM from "react-dom";
import { useModalStore } from "../../store";

interface IProps {
  modalID: string;
  autoClose?: boolean;
  children?: ReactNode;
  width?: string | number;
  height?: string | number;
  bgColor?: string;
}

function Modal(props: IProps) {
  const modalID = useModalStore((state) => state.modalID);
  const closeModal = useModalStore((state) => state.closeModal);

  const modalAreaCSS = css({
    width: "calc(100vw - (100vw - 100%))",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: props.bgColor ? props.bgColor : "rgba(0, 0, 0, 0.4)",
    backdropFilter: "blur(3px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    zIndex: 25555,
  });

  const clickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = (e.target as Element).id === "modal--background";
    if (props.autoClose && target) closeModal();
  };

  const modalCSS = css({
    width: props.width ?? "auto",
    height: props.height ?? "auto",
  });

  const modalRoot = document.getElementById("modal--root");
  const modalArea = (
    <AnimatePresence>
      {props.modalID === modalID && (
        <motion.div
          id="modal--background"
          css={modalAreaCSS}
          onClick={clickHandler}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div css={modalCSS} initial={{ y: 300 }} animate={{ y: 0 }}>
            {props.children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (modalRoot) {
    return ReactDOM.createPortal(modalArea, modalRoot);
  } else {
    return <></>;
  }
}

export default Modal;
