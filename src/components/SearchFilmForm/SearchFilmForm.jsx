export const SearchFilmForm = ({ search }) => {
  const hendleSubmit = e => {
    e.preventDefault();
    search(e.target.text.value);
    e.target.reset();
  };
  return (
    <form onSubmit={hendleSubmit}>
      <input type="text" name="text" />
      <button type="submit">Submit</button>
    </form>
  );
};
