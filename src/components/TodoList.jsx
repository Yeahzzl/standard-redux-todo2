import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { deleteTodo, switchTodo } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";

function TodoList({ isActive }) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteBtn = (id) => {
    dispatch(deleteTodo(id));
  };

  const switchBtn = (id) => {
    dispatch(switchTodo(id));
  };
  return (
    <Container>
      <h1>{isActive ? "완료한 일" : "해야할 일"}</h1>
      {todos
        .filter((todo) => {
          return todo.isDone === isActive;
        })
        .map((todo) => {
          return (
            <TodoWrap key={todo.id}>
              <h3>{todo.title}</h3>
              <p>{todo.content}</p>
              <button
                onClick={() => {
                  switchBtn(todo.id);
                }}
              >
                {isActive ? "취소하기" : "완료하기"}
              </button>
              <button
                onClick={() => {
                  deleteBtn(todo.id);
                }}
              >
                삭제하기
              </button>
              <button
                onClick={() => {
                  navigate(`/${todo.id}`);
                }}
              >
                자세히보기
              </button>
            </TodoWrap>
          );
        })}
    </Container>
  );
}

const Container = styled.div`
  background-color: skyblue;
`;

const TodoWrap = styled.div`
  border: 1px solid black;
  margin: 20px;
`;
export default TodoList;
