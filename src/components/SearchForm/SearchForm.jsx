import { useSearchParams } from 'react-router-dom';

const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    const queryValue = query !== '' ? { query } : {};
    setSearchParams(queryValue);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const searchValue = e.target.elements.search.value.trim();

    if (searchValue === '') {
      return;
    }

    updateQueryString(searchValue);
  };
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <input type="text" name="search" defaultValue={query} />
      <button type="submit">Search</button>
    </form>
  );
};
export default SearchForm;
