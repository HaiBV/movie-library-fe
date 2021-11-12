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
    <div>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input type='email' placeholder='Email Address' name='email' value={email} onChange={(e) => onChange(e)} required />
        </div>
        <div className='form-group'>
          <input type='password' placeholder='Password' name='password' value={password} onChange={(e) => onChange(e)} />
        </div>
        <input type='submit' className='btn btn-primary' value='Login / Register' />
      </form>
    </div>
  );
};

GuestNarbar.propTypes = {};

export default GuestNarbar;
