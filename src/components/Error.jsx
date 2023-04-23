import React from 'react';
import './style.css';
const Error = ({ err }) => {
  return (
    <div className='error-box'>
      <i className='fas fa-exclamation-triangle'></i>
      <p> {err}</p>
    </div>
  );
};

export default Error;
