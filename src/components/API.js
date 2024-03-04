import axios from "axios";

axios.defaults.baseURL = "";

const getAPI = async (q, page) => {
  const { data } = await axios(
    `https://api.unsplash.com/search/photos?query=${q}&page=${page}&client_id=z1psV3HxLpDFPTQrBxRCyaFKwHID3B6-zJ8ukd0eQKI&per_page=12`
  );

  return data;
};

export default getAPI;
