import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Todo from './components/Todo/Todo';
import AppContext from './Context/AppContext';
import useLocal from './CustomHook/useLocal';
import { TodosContext } from './Types';
import TodoLists from './components/TodoLists/TodoLists';
import TodoList from './components/TodoList/TodoList';

function App():JSX.Element {
  // const [todos, setTodos] = useState<todos[]>([]);

  const [todos, setTodos] = useLocal([]);
  const [currentList, setCurrentList] = useState('');

  const providerValue:TodosContext = useMemo(() => ({todos, setTodos, currentList, setCurrentList}),[todos, setTodos, setCurrentList, currentList])

  useEffect(() => {
    if(localStorage.getItem('todos')){
      setTodos(JSON.parse(localStorage.getItem('todos') || '[]'))
    }else{
      localStorage.setItem('todos', JSON.stringify(todos))
    }
    setCurrentList((window.location.pathname.split('/')[1]).split('-').join(' ') || '')
    console.log(currentList)

  }, [])

  return (
    <AppContext.Provider value={providerValue}>
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path='/' element={<TodoLists/>} />
          <Route path=':todo_list' element={<TodoList/>} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
