import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onCllickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {/* {incompleteTodos.map((todo, index) => { */}
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onCllickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
