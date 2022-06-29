import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
    // alert(todoText);
  };

  //共通関数化してみた
  //配列とインデックスと追加要素を受け取って配列を作成する機能
  // const funTest = (array, idx, addText) => {
  //   // console.log("array:" + array);
  //   // console.log("idx:" + idx);
  //   // console.log("addText:" + addText);
  //   // console.log("maxLength:" + array.length);
  //   const newArray = [...array];
  //   if (addText !== "") {
  //     newArray[newArray.length] = addText;
  //   }
  //   if (idx > -1) {
  //     newArray.splice(idx, 1);
  //   }
  //   // console.log("newArray:" + newArray);
  //   return newArray;
  // };

  const onCllickDelete = (index) => {
    // 共通関数化してみた
    // const ans = funTest(incompleteTodos, index, "");
    // setIncompleteTodos(ans);
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  const onClickComplete = (index) => {
    // 共通関数化してみた
    // const ans = funTest(incompleteTodos, index, "");
    // setIncompleteTodos(ans);

    // const ansComp = funTest(completeTodos, -1, incompleteTodos[index]);
    // setCompleteTodos(ansComp);

    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };
  const onClickBack = (index) => {
    // 共通関数化してみた
    // const ans = funTest(completeTodos, index, "");
    // setCompleteTodos(ans);

    // const ansInComp = funTest(incompleteTodos, -1, completeTodos[index]);
    // setIncompleteTodos(ansInComp);

    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      {/* コンポーネントにpropsとして渡す */}
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onCllickDelete={onCllickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
