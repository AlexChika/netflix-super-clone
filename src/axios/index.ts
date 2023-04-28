import axios from "axios";
const Axios = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

const api__key = "3321f832e174dca2173247fe9d84eb47";

const api_url_Paths = {
  trending: `/trending/all/week?api_key=${api__key}&language=en-US`,
  videos: `/movie/502356/videos?api_key=${api__key}&language=en-US`,
};
export { api_url_Paths };
export default Axios;
