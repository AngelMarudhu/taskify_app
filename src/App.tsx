import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import InputField from './Components/InputField';
import { Todo } from './Models/Model';
import TodoList from './Components/TodoList';
import { DragDropContext } from 'react-beautiful-dnd';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string | number>(' ');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTask, setCompletedTask] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo('');
    }
  };

  console.log(todos);

  return (
    <div className='App'>
      <Heading>
        <h1>WELCOME TO OUR TYPESCRIPT LET'S SOME FUN</h1>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTask={completedTask}
          setCompletedTask={setCompletedTask}
        />
      </Heading>
    </div>
  );
};

const Heading = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  text-align: center;

  h1 {
    text-align: center;
    color: palevioletred;
    margin-top: 2rem;
  }
`;

export default App;
