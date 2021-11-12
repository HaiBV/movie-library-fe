import React from 'react';

const GuestNarbar = (props) => {
  return (
    <div>
      <input type='text' placeholder='email' />
      <input type='password' placeholder='password' />
      <button>Login/Register</button>
    </div>
  );
};

GuestNarbar.propTypes = {};

export default GuestNarbar;
