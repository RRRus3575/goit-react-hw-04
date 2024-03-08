import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ data, openModal }) => {
  return (
    <ul className={css.list}>
      {data.map((el) => (
        <ImageCard el={el} openModal={openModal} key={el.id} />
      ))}
    </ul>
  );
};

export default ImageGallery;
