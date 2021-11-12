import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from 'actions/movie.action';
import './ShareMovie.css';

const ShareMovie = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    url: '',
  });

  const { url } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (formData.url !== '') {
      dispatch(addMovie(formData));
    }
  };

  return (
    <div className='movie'>
      <div className='title'>Share a Youtube movie</div>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <label htmlFor='url'>Youtube URL:</label>
          <input type='text' placeholder='' name='url' value={url} onChange={(e) => onChange(e)} required />
        </div>
        <div className='form-group'>
          <button type='submit' className='btn btn-primary'>
            Share
          </button>
        </div>
      </form>
    </div>
  );
};

ShareMovie.propTypes = {};

export default ShareMovie;
