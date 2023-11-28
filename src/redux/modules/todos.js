// import shortid from "shortid";
import uuid from "react-uuid";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const switchTodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload,
  };
};

const initialState = [
  {
    id: uuid(),
    title: "제목1",
    content: "내용1",
    isDone: false,
  },
  {
    id: uuid(),
    title: "제목2",
    content: "내용2",
    isDone: true,
  },
  {
    id: uuid(),
    title: "제목3",
    content: "내용3",
    isDone: false,
  },
];

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];

    case "DELETE_TODO":
      return state.filter((item) => {
        return item.id !== action.payload;
      });

    case "SWITCH_TODO":
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        }
      });
    default:
      return state;
  }
};

export default todos;
