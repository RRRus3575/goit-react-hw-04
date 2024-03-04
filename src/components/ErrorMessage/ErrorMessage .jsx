import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <p className={css.notification}>
      Nothing was found for this query, please try entering a different value😞
    </p>
  );
};

export default ErrorMessage;
