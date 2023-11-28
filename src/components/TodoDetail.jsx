import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";

function TodoDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <TodoWrap>
        {todos
          .filter((item) => {
            return item.id === id;
          })
          .map((item) => {
            return (
              <div>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            );
          })}
      </TodoWrap>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        홈으로가기
      </button>
    </div>
  );
}

const TodoWrap = styled.div`
  background-color: skyblue;
  border: 1px solid black;
  margin: 20px;
`;
export default TodoDetail;
