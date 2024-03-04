import css from "./ImageCard.module.css";

const ImageCard = ({ data, openModal }) => {
  return data.map((el) => (
    <li key={el.id} onClick={openModal} className={css.item}>
      <img
        src={el.urls.fall}
        srcSet={el.urls.raw}
        alt={el.tags.map((el) => el.title)}
      />
    </li>
  ));
};

export default ImageCard;
