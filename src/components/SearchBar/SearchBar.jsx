import { useState } from "react";
import css from "./SearchBar.module.css";

const SearchBar = ({ submitForm }) => {
  const [inputText, setInputText] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEmpty(false);
    if (inputText.length < 1) {
      setIsEmpty(true);
      return;
    }
    submitForm(inputText);
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        type="text"
        name="search"
        value={inputText}
        onChange={handleChange}
        className={css.searchInput}
      />
      {isEmpty && (
        <p className={css.text}>
          Empty row, please enter data in the search field
        </p>
      )}
    </form>
  );
};

export default SearchBar;
