import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchMovies } from 'moviesAPI';
import MovieList from 'components/MovieList/MovieList';
import SearchForm from 'components/SearchForm/SearchForm';

const Movies = () => {
  const [foundMovies, setFoundMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchQueryMovies = async searchQuery => {
      try {
        setLoading(true);
        const { results } = await SearchMovies(searchQuery);

        setFoundMovies(results);

        if (results.length === 0) {
          alert('Try again :-)');
        }
      } catch (error) {
        alert(`Try again :-)`);
      } finally {
        setLoading(false);
      }
    };
    fetchQueryMovies(query);
  }, [query]);

  return (
    <div>
      <SearchForm />

      {loading && <p>Loading...</p>}

      <MovieList movies={foundMovies} />
    </div>
  );
};

export default Movies;
