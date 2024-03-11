import css from "./ImageCard.module.css";

const ImageCard = ({ el, openModal }) => {
  return (
    <li key={el.id} className={css.item}>
      <img
        onClick={openModal}
        src={el.urls.small}
        srcSet={el.urls.raw}
        alt={el.tags.map((el) => el.title)}
      />
    </li>
  );
};

export default ImageCard;
