import { useState } from 'react';
import DatePicker from 'react-datepicker';
import Button from '../components/Button';

const priorityArr = ['low', 'normal', 'high'];

const TodoItems = ({
  singleTask,
  item,
  removeItem,
  handleCheckboxChange,
  handleSubmitUpdateTask,
  handleChangeValue,
  handleDateChange,
  getIdtoUpdateSingleTask,
}) => {
  const { id, taskTitle, description, dateTime, priority, isDone } = item;

  const [showDetail, setShowDetail] = useState(false);

  return (
    <div>
      <div className='box-todo-list'>
        <div className='name-todo-list'>
          <input
            type='checkbox'
            checked={isDone}
            onChange={(e) => handleCheckboxChange(e, id)}
          />

          <h3>{taskTitle}</h3>
        </div>

        <div>
          <Button
            type={'detail-todo-list'}
            isSubmit={false}
            content={'Detail'}
            onClick={() => {
              setShowDetail(!showDetail);
              getIdtoUpdateSingleTask(id);
            }}
          />

          <Button
            type={'remove-todo-list'}
            isSubmit={false}
            content={'Remove'}
            onClick={() => removeItem(id)}
          />
        </div>
      </div>

      <div
        className={`${
          showDetail ? 'update-todo-list collapsed' : 'update-todo-list'
        }`}
      >
        <form onSubmit={(e) => handleSubmitUpdateTask(e, id)}>
          <input
            type='text'
            placeholder='Add new task ...'
            className='input-new-task'
            name='taskTitle'
            value={singleTask?.taskTitle}
            onChange={handleChangeValue}
          />

          <h3>Description</h3>
          <textarea
            className='textarea-new-task'
            name='description'
            value={singleTask?.description}
            onChange={handleChangeValue}
          />

          <div className='box-new-task'>
            <div>
              <h3>Due Date</h3>
              <DatePicker
                name='dateTime'
                selected={singleTask?.dateTime}
                onChange={handleDateChange}
                dateFormat='d MMMM, yyyy'
                minDate={new Date()}
                className='due-date-new-task'
                placeholderText='Choose date'
              />
            </div>

            <div>
              <h3>Piority</h3>
              <select
                name='priority'
                value={singleTask?.priority}
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

          <Button
            type={'update-task'}
            content={'Update'}
            isSubmit
            onClick={() => setShowDetail(!showDetail)}
          />
        </form>
      </div>
    </div>
  );
};

export default TodoItems;
