import { useState } from "react";

const SearchBar = ({ submitForm }) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    submitForm(inputText);
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        value={inputText}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBar;
