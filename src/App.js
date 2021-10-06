import { createContext, useState } from 'react';
import './assets/css/global.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

export const TodoContext = createContext();

function App() {
  const [todos, setTodos] = useState([]);
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
