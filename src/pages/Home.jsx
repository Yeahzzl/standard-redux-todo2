import React from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import TodoList from "../components/TodoList";

const Home = () => {
  return (
    <div>
      <Header />
      <Input />
      <TodoList isActive={false} />
      <TodoList isActive={true} />
    </div>
  );
};

export default Home;
