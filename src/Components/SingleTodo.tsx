import React, { useState } from 'react';
import { Todo } from '../Models/Model';
import styled from 'styled-components';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';

type Propsss = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Propsss> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string | number>(todo.todo);

  console.log(editTodo);

  console.log(edit);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  return (
    <Forming onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          className='edit_input'
          value={editTodo}
          onChange={(e) => {
            setEditTodo(e.target.value);
          }}
        />
      ) : todo.isDone ? (
        <s>{todo.todo}</s>
      ) : (
        <span>{todo.todo}</span>
      )}

      <Icons>
        <span>
          <AiFillEdit
            fontSize='large'
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit);
              }
            }}
          />{' '}
        </span>
        <span>
          <AiFillDelete
            fontSize='large'
            onClick={() => handleDelete(todo.id)}
          />{' '}
        </span>
        <span>
          <TiTick fontSize='large' onClick={() => handleDone(todo.id)} />{' '}
        </span>
      </Icons>
    </Forming>
  );
};

const Forming = styled.form`
  margin-top: 2rem;
  width: 400px;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: linear-gradient(
    90deg,
    rgba(0, 205, 212, 0.53) 0%,
    rgba(236, 238, 130, 0.47) 100%
  );
  border-radius: 50px;
  box-shadow: 11px 10px 16px -11px rgba(0, 0, 0, 1);

  .edit_input {
    background: linear-gradient(
      90deg,
      rgba(236, 238, 130, 0.47) 0%,
      rgba(0, 205, 212, 0.53) 100%
    );
    border: none;
    padding: 10px;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    box-shadow: inset 4px 6px 23px -7px rgba(0, 0, 0, 1);
  }
`;

const Icons = styled.div`
  span {
    padding: 10px;
    cursor: pointer;
  }
`;

export default SingleTodo;
