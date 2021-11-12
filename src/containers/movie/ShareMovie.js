import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from 'actions/movie.action';

const ShareMovie = (props) => {
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
    dispatch(addMovie(formData));
  };

  return (
    <div>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input type='text' placeholder='' name='url' value={url} onChange={(e) => onChange(e)} required />
        </div>
        <input type='submit' className='btn btn-primary' value='Share' />
      </form>
    </div>
  );
};

ShareMovie.propTypes = {};

export default ShareMovie;
