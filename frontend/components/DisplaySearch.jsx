const DisplaySearch = ({ movies }) => (
  <datalist id="suggestions">
    {movies.map(movie => (
      <option key={movie.id} value={movie.title} />
    ))}
  </datalist>
);

export default DisplaySearch;
