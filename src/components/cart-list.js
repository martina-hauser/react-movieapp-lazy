import { Movie } from "./movie";

const imageBasePath = "https://image.tmdb.org/t/p/w185/";

export function CartList({ movies, selectedMovies }) {
  return (
    <div className="movie-list">
      {selectedMovies.length === 0 ? "Cart is empty." : ""}
      {movies
        .filter((movie) => {
          return selectedMovies.includes(movie.id);
        })
        .map((movie) => {
          return (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              image={imageBasePath + movie.poster_path}
            />
          );
        })}
    </div>
  );
}

CartList.displayName = "CartList";
