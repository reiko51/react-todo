import React from "react";

// コンポーネント化するとCSSもJSX内部に書くことがある
// オブジェクトなので各styleの最後は;ではなくて,
const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};
export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    // <div className="input-area">
    <div style={style}>
      <input
        placeholder="TODOを入力"
        value={todoText}
        // onChange={onChangeTodoText}
        onChange={onChange}
      />
      {/* <button onClick={onClickAdd}>追加</button> */}
      <button onClick={onClick}>追加</button>
    </div>
  );
};
