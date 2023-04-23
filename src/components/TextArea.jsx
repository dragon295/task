import React from 'react';

const TextArea = ({ description, handleChangeValue }) => {
  return (
    <textarea
      className='textarea-new-task'
      name='description'
      value={description}
      onChange={handleChangeValue}
    />
  );
};

export default TextArea;
