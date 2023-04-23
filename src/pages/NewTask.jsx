import React from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Error from '../components/Error';
import Button from '../components/Button';
import Input from '../components/input';
import Form from '../components/Form';

const NewTask = ({
  errorTitle,
  task,
  priorityArr,
  handleChangeValue,
  handleDateChange,
  handleSubmit,
  showModal,
  setShowModal,
}) => {
  const { taskTitle, description, dateTime, priority } = task;

  return (
    <div className='new-task'>
      <h1 className='title-new-task'>New Task</h1>

      <Form
        handleSubmit={handleSubmit}
        task={task}
        errorTitle={errorTitle}
        handleChangeValue={handleChangeValue}
        handleDateChange={handleDateChange}
        priorityArr={priorityArr}
        isAdd
        setShowModal
        showModal
      />
      {/* <form onSubmit={handleSubmit}>
        <Input
          type='text'
          name='taskTitle'
          value={taskTitle}
          onChange={handleChangeValue}
          placeholder='Add new task ...'
        />

        {errorTitle && <Error err='Please enter name task' />}

        <h3>Description</h3>
        <textarea
          className='textarea-new-task'
          name='description'
          value={description}
          onChange={handleChangeValue}
        />

        <div className='box-new-task'>
          <div>
            <h3>Due Date</h3>
            <DatePicker
              name='dateTime'
              selected={new Date(dateTime)}
              onChange={handleDateChange}
              showIcon
              dateFormat='d MMMM, yyyy'
              minDate={new Date()}
              className='due-date-new-task'
            />
          </div>

          <div>
            <h3>Piority</h3>
            <select
              name='priority'
              value={priority}
              onChange={handleChangeValue}
            >
              {priorityArr.map((val, idx) => (
                <option key={idx} value={val}>
                  {val}
                </option>
              ))}
            </select>
          </div>
        </div>

        <Button type='new-task' content={'Add'} isSubmit />
      </form> */}
    </div>
  );
};

export default NewTask;
