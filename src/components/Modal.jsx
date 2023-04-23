import React from 'react';

const Modal = ({ modalContent, showModal }) => {
  return (
    <div id='myModal' className={showModal ? 'modal open' : 'modal'}>
      <div className='modal-content'>
        <i className='fa-solid fa-check'></i>
        <p>{modalContent}</p>
      </div>
    </div>
  );
};

export default Modal;
