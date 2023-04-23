import React from 'react';

const Input = ({
  type,
  value,
  onChange = () => {},
  placeholder,
  isDone,
  name,
}) => {
  return (
    <input
      type={type}
      checked={isDone}
      placeholder={placeholder}
      className='input-new-task'
      value={value}
      name={name}
      onChange={onChange}
    />
  );
};

export default Input;
