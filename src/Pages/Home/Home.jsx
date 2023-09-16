import { useEffect, useState } from 'react';
import { TopMovies } from 'moviesAPI';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [foundMovies, setFoundMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTopMovies = async () => {
      try {
        setLoading(true);
        const { results } = await TopMovies();
        console.log(results);
        setFoundMovies(results);
      } catch (error) {
        error(`Try again :-)`);
      } finally {
        setLoading(false);
      }
    };
    fetchTopMovies();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      <MovieList movies={foundMovies} />
    </div>
  );
};
export default Home;
