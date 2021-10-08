import { createContext, useEffect, useState } from 'react';
import './assets/css/global.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

export const TodoContext = createContext();

const getTodosLocal = () => {
  const todo = sessionStorage.getItem('todos');
  if(todo){
    return JSON.parse(sessionStorage.getItem('todos'));
  } else{
    return [];
  }
}

function App() {
  const [todos, setTodos] = useState(getTodosLocal());


  useEffect(() => {
    sessionStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
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
