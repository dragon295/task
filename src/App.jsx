import { useState, useEffect } from 'react';

import TodoList from './pages/TodoList';
import NewTask from './pages/NewTask';
import Modal from './components/Modal';
import shortid from 'shortid';

import './App.css';

const initialState = {
  taskTitle: '',
  description: '',
  dateTime: new Date()?.getTime(),
  priority: 'normal',
  isDone: false,
};

const priorityArr = ['low', 'normal', 'high'];

const getLocalStorage = () => {
  if (JSON.parse(localStorage.getItem('todoList'))) {
    return JSON.parse(localStorage.getItem('todoList'));
  } else {
    return [];
  }
};

function App() {
  const [task, setTask] = useState(initialState);
  const [arrTask, setArrTask] = useState(getLocalStorage());
  const [errorTitle, setErrorTitle] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleChangeValue = (e) => {
    const { name, value } = e.target;
    setTask((prevState) => ({
      ...prevState,
      [name]: value,
      id: shortid.generate(),
    }));
  };

  const handleDateChange = (date) => {
    console.log(date);
    setTask((prevTask) => ({
      ...prevTask,
      dateTime: date?.getTime(),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.taskTitle) {
      setErrorTitle(true);
      return;
    } else {
      setErrorTitle(false);
    }

    setTask((prevState) => ({
      ...prevState,
      id: shortid.generate(),
    }));

    setArrTask((prevState) => [...prevState, task]);

    setShowModal(true);
    setModalContent('Add successfully');

    setTask(initialState);
  };

  const updateLocalStorage = (values) => {
    localStorage.setItem('todoList', JSON.stringify(arrTask));
  };

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(arrTask));
  }, [arrTask]);

  useEffect(() => {
    const timeOutModal = setTimeout(() => {
      setShowModal(false);
    }, 1000);

    return () => clearTimeout(timeOutModal);
  }, [showModal]);

  return (
    <div className='container'>
      <Modal showModal={showModal} modalContent={modalContent} />

      <NewTask
        task={task}
        setTask={setTask}
        errorTitle={errorTitle}
        priorityArr={priorityArr}
        handleDateChange={handleDateChange}
        handleChangeValue={handleChangeValue}
        handleSubmit={handleSubmit}
      />

      <TodoList
        task={task}
        arrTask={arrTask}
        setArrTask={setArrTask}
        updateLocalStorage={updateLocalStorage}
        showModal={showModal}
        setShowModal={setShowModal}
        setModalContent={setModalContent}
      />
    </div>
  );
}

export default App;
