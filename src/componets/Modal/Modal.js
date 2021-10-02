import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { Backdrop, Content } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");
export function Modal({ children, onCloseModal }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (event) => {
    if (event.code === "Escape") {
      onCloseModal();
    }
  };

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onCloseModal();
    }
  };
  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Content>{children}</Content>
    </Backdrop>,
    modalRoot
  );
}
