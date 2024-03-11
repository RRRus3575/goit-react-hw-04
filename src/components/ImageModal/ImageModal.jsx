import { useEffect } from "react";
import css from "./ImageModal.module.css";

const ImageModal = ({ modalClosed, img }) => {
  const modalClose = (e) => {
    if (e.target.getAttribute("id") === "overlay") {
      console.log("click");
      modalClosed();
    }
  };

  useEffect(() => {
    const handleClickESC = (e) => {
      if (e.code === "Escape") {
        console.log("Escape");
        modalClosed();
      }
    };

    document.addEventListener("keydown", handleClickESC);
    return () => {
      document.removeEventListener("keydown", handleClickESC);
    };
  }, [modalClosed]);

  return (
    <div className={css.overlay} onClick={modalClose} id="overlay">
      <div className={css.modal}>
        <img src={img} />
      </div>
    </div>
  );
};

export default ImageModal;
