import React from "react";
import "./TodoCard.css";

export default function TodoCard() {
  return (
    <div className="todo_container">
      <div>
        <h2 className="todo_title">리액트 공부하기</h2>
        <div>리액트 기초를 공부해봅시다.</div>
      </div>
      <div className="button_set">
        <button className="delete_button">삭제</button>
        <button className="done_button">완료</button>
      </div>
    </div>
  );
}
