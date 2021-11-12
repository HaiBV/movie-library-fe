import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { authSelector } from 'reducers/selectors';
import { loadUser } from 'actions/auth.action';

import AuthNarbar from './AuthNarbar';
import GuestNarbar from './GuestNarbar';

const Navbar = () => {
  const { isAuthenticated, loading } = useSelector(authSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <nav className='navbar bg-dark'>
      <Link to='/'>
        <h1>
          <i className='fas fa-code' /> Funny Movies
        </h1>
      </Link>
      {!loading && <>{isAuthenticated ? <AuthNarbar /> : <GuestNarbar />}</>}
    </nav>
  );
};

export default Navbar;
