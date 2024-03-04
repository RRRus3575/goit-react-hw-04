import { useEffect, useState } from "react";

import "./App.css";
import LoadMoreBtn from "./components/LoadMoreBtn";
import getAPI from "./components/API";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal";
import SearchBar from "./components/SearchBar";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage ";

export const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [imgLarge, setImgLarge] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState("");

  const submitForm = (text) => {
    setSearch(text);
    setData([]);
    setPage(1);
    setTotalPages(1);
  };

  const buttonClick = () => {
    setPage((prev) => prev + 1);
  };

  const openModal = (e) => {
    setImgLarge(e.target.getAttribute("srcSet"));
    setIsActive(true);
  };

  const modalClose = () => {
    setIsActive(false);
  };

  useEffect(() => {
    async function getttingAPI() {
      try {
        setLoading(true);
        setError("");

        const data = await getAPI(search, page);
        console.log(data.results);
        if (data.results.length < 1) {
          setIsEmpty(true);
          return;
        }

        setData((prev) => [...prev, ...data.results]);
        setTotalPages(Math.ceil(data.total / 12));
        setIsEmpty(false);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    if (search.length > 0) {
      getttingAPI();
    }
  }, [search, page]);

  return (
    <div className="container">
      <SearchBar submitForm={submitForm} />

      {isActive && <ImageModal img={imgLarge} modalClosed={modalClose} />}

      {error || (isEmpty && <ErrorMessage />)}
      {data.length > 0 && <ImageGallery data={data} openModal={openModal} />}
      {loading && <Loader />}
      {totalPages > page && <LoadMoreBtn click={buttonClick} />}
    </div>
  );
};

export default App;
