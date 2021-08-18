import { MovieListContainer } from "../container/movie-list-container";

export function Content({ isLoading }) {
  return isLoading ? <p>Loading Movies...</p> : <MovieListContainer />;
}
