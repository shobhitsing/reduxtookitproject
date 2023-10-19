import React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/todos";
const App = () => {
  return (
    <>
      <h1>Learn Redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  );
};

export default App;
