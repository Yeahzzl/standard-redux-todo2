import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { addTodo } from "../redux/modules/todos";
import uuid from "react-uuid";

function Input() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuid(),
      title,
      content,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
  };

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const contentChangeHandler = (e) => {
    setContent(e.target.value);
  };

  return (
    <div>
      <FormContainer onSubmit={onSubmit}>
        <span>제목</span>
        <input type="text" value={title} onChange={titleChangeHandler} />
        <span>내용</span>
        <input type="text" value={content} onChange={contentChangeHandler} />
        <button>등록하기</button>
      </FormContainer>
    </div>
  );
}

const FormContainer = styled.form`
  background-color: gray;
  height: 200px;
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

export default Input;
