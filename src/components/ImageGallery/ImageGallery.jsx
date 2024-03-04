import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ data, openModal }) => {
  return (
    <ul className={css.list}>
      <ImageCard data={data} openModal={openModal} />
    </ul>
  );
};

export default ImageGallery;
