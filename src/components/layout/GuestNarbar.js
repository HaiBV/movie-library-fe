import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'actions/auth.action';
import { setAlert } from 'actions/alert.action';

import { isEmail } from 'utils/validator';

const GuestNarbar = (props) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (isEmail(email)) {
      dispatch(login(email, password));
    } else {
      dispatch(setAlert('Email is not valid!', 'error'));
    }
  };

  return (
    <div className='user-info'>
      <form onSubmit={(e) => onSubmit(e)}>
        <input type='email' placeholder='Email Address' name='email' value={email} onChange={(e) => onChange(e)} required />
        <input type='password' placeholder='Password' name='password' value={password} onChange={(e) => onChange(e)} required />
        <button type='submit' className='btn btn-primary'>
          Login / Register
        </button>
      </form>
    </div>
  );
};

GuestNarbar.propTypes = {};

export default GuestNarbar;
