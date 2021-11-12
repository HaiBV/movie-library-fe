import { GET_MOVIES, MOVIE_ERROR, ADD_MOVIE } from '../actions/actionTypes';

const initialState = {
  movies: [],
  loading: true,
  error: {},
};

export default function movieReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: payload,
        loading: false,
      };
    case ADD_MOVIE:
      return {
        ...state,
        movies: [payload, ...state.movies],
        loading: false,
      };
    case MOVIE_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}
