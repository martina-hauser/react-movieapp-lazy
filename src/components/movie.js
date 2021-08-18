export function Movie({
  title,
  image,
  handlePosterClick = () => {},
  selected = false,
  id
}) {
  const handleClick = () => {
    handlePosterClick(id);
  };

  return (
    <div className={selected ? " selected" : ""}>
      <h3>{title}</h3>
      <img onClick={handleClick} src={image} alt={title} />
    </div>
  );
}
