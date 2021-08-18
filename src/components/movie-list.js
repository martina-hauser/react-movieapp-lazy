import { Movie } from "./movie";

const imageBasePath = "https://image.tmdb.org/t/p/w185/";

export function MovieList({ isLoading, movies, selectedMovies, dispatch }) {
  const handlePosterClick = (id) => {
    dispatch({ type: "poster_click", payload: { id } });
  };
  return (
    <div className="movie-list">
      {isLoading ? "Loading Movies..." : ""}
      {movies.map((movie) => {
        return (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            image={imageBasePath + movie.poster_path}
            selected={selectedMovies.includes(movie.id)}
            handlePosterClick={handlePosterClick}
          />
        );
      })}
    </div>
  );
}

MovieList.displayName = "MovieList";
