import { useState, useEffect } from 'react';
import TodoItems from './TodoItems';
import BulkAction from '../components/BulkAction';
import Input from '../components/InputComponent';
import shortid from 'shortid';
import Confirm from '../components/Confirm';

const TodoList = ({
  task,
  arrTask,
  setArrTask,
  updateLocalStorage,
  setShowModal,
  setModalContent,
}) => {
  const [search, setSearch] = useState('');
  const [singleTask, setSingleTask] = useState(task);
  const [modalDelete, setModalDelete] = useState(false);
  const [actionTypes, setActionTypes] = useState('');
  const [showIdDelete, setShowIdDelete] = useState('');

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleDateUpdate = (date) => {
    setSingleTask((prevTask) => ({
      ...prevTask,
      dateTime: date?.getTime(),
    }));
  };

  const handleUpdateValue = (e) => {
    const { name, value } = e.target;
    setSingleTask((prevState) => ({
      ...prevState,
      [name]: value,
      id: shortid.generate(),
    }));
  };

  const handleCheckboxUpdate = (e, id) => {
    setArrTask((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: e.target.checked };
        } else {
          return { ...item };
        }
      })
    );
  };

  const getIdtoUpdateSingleTask = (id) => {
    const clonedTask = arrTask.find((item) => item.id === id);
    setSingleTask(clonedTask);
  };

  const handleSubmitUpdateTask = (e, id) => {
    e.preventDefault();
    const idUpdate = arrTask.findIndex((item) => item.id === id);
    arrTask.splice(idUpdate, 1, singleTask);
    getIdtoUpdateSingleTask(id);

    setShowModal(true);
    setModalContent('Update Successfully');
  };

  const removeItem = (id) => {
    setArrTask((prevState) => prevState.filter((item) => item.id !== id));
  };

  const bulkAction = () => {
    setArrTask((prevState) =>
      prevState.filter((item) => item.isDone === false)
    );
  };

  const doneAction = () => {
    setArrTask((prevState) =>
      prevState.map((item) => ({ ...item, isDone: true }))
    );
  };

  updateLocalStorage(arrTask);

  useEffect(() => {
    setArrTask(arrTask);
  }, [arrTask]);

  console.log(actionTypes);

  return (
    <div className='todo-list'>
      <Confirm
        modalDelete={modalDelete}
        bulkAction={bulkAction}
        setModalDelete={setModalDelete}
        actionTypes={actionTypes}
        showIdDelete={showIdDelete}
        handleCLickItem={removeItem}
      />

      <h1 className='title-todo-list'>To do List</h1>

      <Input
        type='text'
        placeholder='Search ...'
        value={search}
        onChange={handleChangeSearch}
        name={'search'}
      />

      {arrTask
        .filter((item) => item.taskTitle.includes(search))
        .sort((a, b) => a.dateTime - b.dateTime)
        .map((item) => {
          return (
            <TodoItems
              key={item.id}
              singleTask={singleTask}
              item={item}
              getIdtoUpdateSingleTask={getIdtoUpdateSingleTask}
              removeItem={removeItem}
              handleCheckboxChange={handleCheckboxUpdate}
              handleSubmitUpdateTask={handleSubmitUpdateTask}
              handleChangeValue={handleUpdateValue}
              handleDateChange={handleDateUpdate}
              setShowModal={setShowModal}
              setModalDelete={setModalDelete}
              setActionTypes={setActionTypes}
              setShowIdDelete={setShowIdDelete}
            />
          );
        })}

      {arrTask.filter((item) => item.isDone === true).length > 0 && (
        <BulkAction
          doneAction={doneAction}
          setModalDelete={setModalDelete}
          setActionTypes={setActionTypes}
        />
      )}
    </div>
  );
};

export default TodoList;
