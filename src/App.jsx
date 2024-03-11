import { useEffect, useState } from "react";

import "./App.css";
import LoadMoreBtn from "./components/LoadMoreBtn";
import getAPI from "./components/API";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage ";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const notify = () =>
    toast.warning("Empty row, please enter data in the search field", {
      position: "top-right",
      autoClose: 5000,
      closeOnClick: true,
    });

  const submitForm = (text) => {
    console.log("submitApp", text.length);
    setIsEmpty(false);
    if (text.length < 1) {
      notify();
      console.log("submitAppIf", text.length);
      setIsEmpty(true);

      return;
    }

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
    async function gettingAPI() {
      try {
        setLoading(true);
        setError("");

        const data = await getAPI(search, page);
        console.log(data.results);
        if (data.results.length < 1) {
          return;
        }
        setData((prev) => [...prev, ...data.results]);
        setTotalPages(Math.ceil(data.total / 12));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    if (search.length > 0) {
      gettingAPI();
    }
  }, [search, page]);

  return (
    <>
      {isEmpty && <ToastContainer />}
      <div className="container">
        <SearchBar submitForm={submitForm} />

        {isActive && <ImageModal img={imgLarge} modalClosed={modalClose} />}

        {data.length < 1 && !isEmpty && (
          <p>
            Nothing was found for this query, please try entering a different
            value😞
          </p>
        )}
        {error && <ErrorMessage error={error} />}
        {data.length > 0 && <ImageGallery data={data} openModal={openModal} />}
        {loading && <Loader />}
        {totalPages > page && <LoadMoreBtn click={buttonClick} />}
      </div>
    </>
  );
};

export default App;
