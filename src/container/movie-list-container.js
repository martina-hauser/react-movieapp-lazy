import { connect } from "react-redux";
import { MovieList } from "../components/movie-list";
import { getAllMovies, getIsLoading, getSelectedMovies } from "../selectors";

function mapStateToProps(state) {
  return {
    isLoading: getIsLoading(state),
    movies: getAllMovies(state),
    selectedMovies: getSelectedMovies(state)
  };
}

export const MovieListContainer = connect(mapStateToProps)(MovieList);
