import { createContext, useEffect, useState } from 'react';
import './assets/css/global.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

export const TodoContext = createContext();

function App() {
  const [todos, setTodos] = useState([]);


  // useEffect(() => {
  //   saveToLocal();
  // }, [todos]);

  // useEffect(() => {
  //   getFromLocal();
  // }, []);


  // const saveToLocal = () => {
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // }

  // const getFromLocal = () => {
  // if (localStorage.getItem('todos') === null) {
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // } else {
  //   let localTodos = JSON.parse(localStorage.getItem('todos'));
  //   setTodos(localTodos);
  //   console.log('todos from local', todos)
  // }
  // let localTodos = JSON.parse(localStorage.getItem('todos'));
  // setTodos(localTodos);
  // }
  
  return (
    <TodoContext.Provider value={[todos, setTodos]}>
      <div className="App">
        <Header></Header>
        <Main></Main>
      </div>
    </TodoContext.Provider>
  );
}

export default App;
