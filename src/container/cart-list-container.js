import { connect } from "react-redux";
import { CartList } from "../components/cart-list";
import { getAllMovies, getSelectedMovies } from "../selectors";

function mapStateToProps(state) {
  return {
    movies: getAllMovies(state),
    selectedMovies: getSelectedMovies(state)
  };
}

export const CartListContainer = connect(mapStateToProps)(CartList);
