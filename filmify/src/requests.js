const API_KEY = "4b780ecaac3c30fefa5995543355bb44";

const requests = {
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;
