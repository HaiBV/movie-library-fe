import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authSelector } from 'reducers/selectors';
import { logout } from 'actions/auth.action';

const AuthNarbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(authSelector);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {`Welcome ${user?.email}`}
      <Link to='/share' className='btn btn-primary my-1'>
        Share
      </Link>
      <input type='button' className='btn btn-primary' value='Logout' onClick={handleLogout} />
    </div>
  );
};

AuthNarbar.propTypes = {};

export default AuthNarbar;
