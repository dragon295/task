import React from 'react';
import Button from './Button';

const BulkAction = ({ doneAction, setModalDelete, setActionTypes }) => {
  return (
    <div className='box-bulk-action'>
      <h2>Bulk Action</h2>

      <div>
        <Button
          type={'bulk-action'}
          isSubmit={false}
          content={'Done'}
          onClick={doneAction}
        />

        <Button
          type={'remove-todo-list'}
          isSubmit={false}
          onClick={() => {
            setModalDelete(true);
            setActionTypes('bulk-action');
          }}
          content={'Remove'}
        />
      </div>
    </div>
  );
};

export default BulkAction;
