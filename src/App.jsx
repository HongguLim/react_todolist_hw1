import React, { useState } from "react";
import "./App.css";
import TodoCard from "./components/TodoCard";

function TodoList() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "제목1",
      body: "내용1",
      isDone: true,
    },
    {
      id: 2,
      title: "제목2",
      body: "내용2",
      isDone: false,
    },
  ]);

  return (
    <>
      <div className="layout">
        <div className="Header_container">
          <div>My Todo List</div>
          <div>React</div>
        </div>
        <form className="add_form">
          <div>
            <label className="form_label">제목</label>
            <input type="text" name="input_title" onclick="add_input"></input>
            <label className="form_label">내용</label>
            <input
              type="text"
              name="input_content"
              className="add_input"
            ></input>
          </div>
          <button className="add_button" id="click_add_button">
            추가하기
          </button>
        </form>

        <h1 className="Working">Working.. 🔥</h1>
        <div>{<TodoCard />}</div>
        <h1 className="Done">Done..! 🎉</h1>
        <div>{<TodoCard />}</div>
      </div>
    </>
  );
}
export default TodoList;
