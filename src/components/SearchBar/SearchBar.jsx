import { useState } from "react";
import css from "./SearchBar.module.css";

const SearchBar = ({ submitForm }) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    console.log("submit");
    e.preventDefault();

    submitForm(inputText);
  };

  const handleChange = (e) => {
    setInputText(e.target.value.trim());
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
    </form>
  );
};

export default SearchBar;
