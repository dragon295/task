import React from 'react';
import Error from './Error';
import Input from './InputComponent';
import TextArea from './TextArea';
import DatePicker from 'react-datepicker';
import Button from './Button';

const Form = ({
  task,
  errorTitle,
  handleChangeValue,
  description,
  handleDateChange,
  priorityArr,
  isAdd,
  handleSubmit = () => {},
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Input
        type='text'
        name='taskTitle'
        value={task.taskTitle}
        onChange={handleChangeValue}
        placeholder='Add new task ...'
      />

      {errorTitle && <Error err='Please enter name task' />}

      <h3>Description</h3>
      <TextArea
        description={description}
        handleChangeValue={handleChangeValue}
      />

      <div className='box-new-task'>
        <div>
          <h3>Due Date</h3>
          <DatePicker
            name='dateTime'
            selected={new Date(task.dateTime)}
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
            value={task.priority}
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

      <Button type='new-task' content={isAdd ? 'Add' : 'Update'} isSubmit />
    </form>
  );
};

export default Form;
