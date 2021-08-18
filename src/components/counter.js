export function Counter({ isLoading, count, dispatch }) {
  const handleClick = () => {
    dispatch({ type: "reset_selected_movies" });
  };

  return (
    <span
      onClick={handleClick}
      className={"counter" + (isLoading ? " counter-hidden" : "")}
    >
      {count}
    </span>
  );
}
