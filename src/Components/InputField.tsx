import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface TodoProps {
  todo: string | number;
  setTodo: React.Dispatch<React.SetStateAction<string | number>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<TodoProps> = ({ todo, setTodo, handleAdd }) => {
  const inputReference = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputReference.current?.focus();
  }, []);

  return (
    <Container>
      <Content>
        <Form
          onSubmit={(e) => {
            handleAdd(e);
          }}
        >
          <input
            type='input'
            ref={inputReference}
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder='Enter'
          />
          <button type='button'>SET</button>
        </Form>
      </Content>
    </Container>
  );
};

const Container = styled.div``;

const Content = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

const Form = styled.form`
  display: flex;
  width: 80%;
  margin: auto;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: none;
  border-radius: 40px;
  border: none;
  border: none;
  box-shadow: inset rgba(0, 0, 0, 0.24) 0px 3px 8px;

  & > input {
    width: 70%;
    position: relative;
    padding: 1rem;
    background-color: transparent;
    border: none;
    font-size: 18px;
    :focus {
      outline: none;
    }
    ::placeholder {
      font-size: 18px;
      color: red;
    }
  }

  & > button {
    position: absolute;
    right: 0;
    padding: 10px;
    border: none;
    background-color: #2f74c0;
    border-radius: 40px;
    color: white;
    margin-right: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    font-weight: bold;

    :active {
      transform: scale(0.8);
      color: yellow;
    }
  }
`;

export default InputField;
