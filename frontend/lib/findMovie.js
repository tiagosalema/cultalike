export const findMovie = (str, movies) => {
  return movies.filter(movie => {
    const regex = new RegExp(str, "gi");
    return movie.title.match(regex);
  });
};
