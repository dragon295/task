import React from 'react';

const Button = ({ type, content, isSubmit, onClick = () => {} }) => {
  return (
    <button
      className={`button-${type}`}
      type={`${isSubmit ? 'submit' : 'button'}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
