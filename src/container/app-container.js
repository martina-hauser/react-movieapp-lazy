import { connect } from "react-redux";
import { App } from "../components/app";
import { getAllMovies, getIsLoading } from "../selectors";

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    isLoading: getIsLoading(state),
    movies: getAllMovies(state)
  };
}

// Connected Component
export const AppContainer = connect(mapStateToProps)(App);
