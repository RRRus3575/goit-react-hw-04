import css from "./ErrorMessage.module.css";

const ErrorMessage = ({ error }) => {
  return <p className={css.notification}>{error}</p>;
};

export default ErrorMessage;
