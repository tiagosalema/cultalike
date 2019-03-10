const apiKey = process.env.API_KEY;
const path = "https://api.themoviedb.org/3/";
const queries = "language=en-US" + "&page=1" + "&append_to_response=images";
const endpoint = `${path}movie/popular?${apiKey}&${queries}`;

export const getMovies = () => fetch(endpoint).then(res => res.json());
