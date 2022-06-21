import React from 'react';
import { Todo } from '../Models/Model';
import styled from 'styled-components';
import SingleTodo from './SingleTodo';

interface Propss {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTask: Todo[];
  setCompletedTask: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Propss> = ({ todos, setTodos }) => {
  return (
    <Container>
      <Content>
        <ActiveTask>
          <span>ACTIVE TASK</span>
          {todos.map((todo) => (
            <SingleTodo
              todo={todo}
              todos={todos}
              key={todo.id}
              setTodos={setTodos}
            />
          ))}
        </ActiveTask>
        <CompletedTask>
          <span>COMPLETED TASK</span>
          {todos.map((todo) => (
            <SingleTodo
              todo={todo}
              todos={todos}
              key={todo.id}
              setTodos={setTodos}
            />
          ))}
        </CompletedTask>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  margin: auto;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 2rem;
`;
const ActiveTask = styled.div`
  width: 38%;
  background: linear-gradient(
    90deg,
    rgba(0, 235, 255, 0.68) 0%,
    rgba(98, 157, 59, 0.64) 100%
  );
  border-radius: 20px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
`;

const CompletedTask = styled.div`
  width: 38%;
  background: linear-gradient(
    90deg,
    rgba(98, 157, 59, 0.64) 0%,
    rgba(0, 235, 255, 0.68) 100%
  );

  border-radius: 20px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
`;

export default TodoList;
