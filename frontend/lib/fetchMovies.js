const apiKey = process.env.API_KEY;
const path = "https://api.themoviedb.org/3/";
const queries = "language=en-US" + "&page=1" + "&append_to_response=images";
const endpoint = `${path}movie/popular?${apiKey}&${queries}`; // "https://api.themoviedb.org/3/movie/popular?api_key=4f8c417bf65d98de95f9be7c5df36f6b&language=en-US&page=1&append_to_response=images"
console.log(endpoint);

export const getMovies = () => fetch(endpoint).then(res => res.json());
