export function getAllMovies(state) {
  return state.movies;
}

export function getSelectedMovies(state) {
  return state.selectedMovies;
}

export function getIsLoading(state) {
  return state.isLoading;
}

export function getSelectedMoviesCount(state) {
  return state.selectedMovies.length;
}
