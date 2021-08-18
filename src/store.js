import { createStore } from "redux";

const initialState = {
  isLoading: true,
  movies: [],
  selectedMovies: []
};

function movieReducer(state, action) {
  switch (action.type) {
    case "set_is_loading":
      return { ...state, isLoading: action.payload };
    case "load_movies_success":
      return { ...state, movies: action.movies, isLoading: false };
    case "reset_selected_movies":
      return {
        ...state,
        selectedMovies: []
      };
    case "poster_click":
      if (state.selectedMovies.includes(action.payload.id)) {
        return {
          ...state,
          selectedMovies: state.selectedMovies.filter(
            (existingId) => existingId !== action.payload.id
          )
        };
      } else {
        return {
          ...state,
          selectedMovies: [...state.selectedMovies, action.payload.id]
        };
      }

    default:
      return state;
  }
}

export const store = createStore(
  movieReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
