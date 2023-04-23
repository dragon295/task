import React from 'react';
import Button from './Button';

const BulkAction = ({ bulkAction, doneAction }) => {
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
          onClick={bulkAction}
          content={'Remove'}
        />
      </div>
    </div>
  );
};

export default BulkAction;
