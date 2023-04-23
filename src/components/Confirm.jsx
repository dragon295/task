import React from 'react';

import Button from './Button';

const Confirm = ({
  actionTypes,
  modalDelete,
  bulkAction,
  setModalDelete,
  showIdDelete,
  handleCLickItem = () => {},
}) => {
  console.log(actionTypes);

  const handleCLick = () => {
    actionTypes === 'bulk-action'
      ? bulkAction()
      : handleCLickItem(showIdDelete);
    setModalDelete(false);
  };
  return (
    <>
      {modalDelete ? (
        <div className='modal-delete-container'>
          <div className='modal-delete'>
            <h4>
              Are you sure want to{' '}
              {actionTypes === 'bulk-action'
                ? 'remove all'
                : 'delete this item'}
            </h4>
            <div className='box-button-confirm'>
              <Button
                content='Delete'
                type={'remove-todo-list'}
                onClick={handleCLick}
              />
              <Button
                content='Cancel'
                type={'cancel'}
                onClick={() => setModalDelete(false)}
              />
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Confirm;
