import React from 'react';
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
      <input type='button' className='btn btn-primary' value='Logout' onClick={handleLogout} />
    </div>
  );
};

AuthNarbar.propTypes = {};

export default AuthNarbar;
