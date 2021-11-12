import axios from 'axios';
import { setAlert } from './alert.action';
import { GET_MOVIES, ADD_MOVIE, MOVIE_ERROR } from './actionTypes';

// Get movies
export const getMovies = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/movies`);

    dispatch({
      type: GET_MOVIES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: MOVIE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add movie
export const addMovie = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/movies`, formData, config);

    dispatch({
      type: ADD_MOVIE,
      payload: res.data,
    });

    dispatch(setAlert('Movie Created', 'success'));
  } catch (err) {
    console.log(err);
    dispatch({
      type: MOVIE_ERROR,
      payload: { msg: err?.response?.data?.message || err.response.statusText, status: err.response.status },
    });
    dispatch(setAlert(err?.response?.data?.message || 'Movie Create Falure!', 'success'));
  }
};
