import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { movieSelector } from 'reducers/selectors';
import { getMovies } from 'actions/movie.action';

const Homepage = (props) => {
  const dispatch = useDispatch();
  const { movies } = useSelector(movieSelector);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <div>
          post by {movie.user_email}
          {movie.title}
        </div>
      ))}
    </div>
  );
};

Homepage.propTypes = {};

export default Homepage;
