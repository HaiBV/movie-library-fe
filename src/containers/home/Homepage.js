import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { movieSelector } from 'reducers/selectors';
import { getMovies } from 'actions/movie.action';
import './Homepage.css';

const Homepage = (props) => {
  const dispatch = useDispatch();
  const { movies } = useSelector(movieSelector);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div className='home'>
      <div className='movies-list'>
        {movies.map((movie) => (
          <div key={movie.movie_id} className='single-movie'>
            <div className='movie-embeded'>
              <iframe
                width='100%'
                height='315'
                src={`https://www.youtube.com/embed/${movie.movie_id}`}
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
            <div className='movie-info'>
              <p className='movie-title'>{movie.title}</p>
              <p className='movie-shared'>
                {`Share by: `}
                <span>{movie.user_email}</span>
              </p>
              <div className='movie-description'>
                Description:
                <p>{movie.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Homepage.propTypes = {};

export default Homepage;
