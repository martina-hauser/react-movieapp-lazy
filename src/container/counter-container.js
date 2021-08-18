import { connect } from "react-redux";
import { Counter } from "../components/counter";
import { getIsLoading, getSelectedMoviesCount } from "../selectors";

function mapStateToProps(state) {
  return {
    isLoading: getIsLoading(state),
    count: getSelectedMoviesCount(state)
  };
}

export const CounterContainer = connect(mapStateToProps)(Counter);
