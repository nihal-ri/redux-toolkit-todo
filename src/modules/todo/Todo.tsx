import React, { useState } from "react";
import * as Styled from "./styles";
import {
  addTodo,
  getAllTodos,
  deleteTodo,
  markTodoDone,
} from "../../logic/todo/todoSlice";
import { useAppDispatch, useAppSelector } from "logic/hooks";
import { FlexColCont, FlexCont } from "shared/styles/styled";
import { DynamicButton } from "shared/button/style";

const Todo = () => {
  const [contentValue, setContentValue] = useState("");
  const allTodos = useAppSelector(getAllTodos);
  const dispatch = useAppDispatch();

  // Event handlers

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: new Date().getTime(),
        isCompleted: false,
        content: contentValue,
      })
    );
    setContentValue("");
  };
  const handleDoneButtonClick = (id: number): void => {
    dispatch(markTodoDone(id));
  };
  const handleDeleteButtonClick = (id: number): void => {
    dispatch(deleteTodo(id));
  };

  return (
    <Styled.TodoCont>
      <form onSubmit={handleSubmit}>
        <FlexColCont>
          <Styled.MyInput
            onChange={(e) => setContentValue(e.target.value)}
            value={contentValue}
          />
          <DynamicButton variant="success" disabled={!contentValue}>
            Add todo
          </DynamicButton>
        </FlexColCont>
      </form>

      <ul>
        <FlexColCont>
          {allTodos.map((todo) => (
            <FlexCont key={todo.id}>
              <div>
                <Styled.MyListItem strike={todo.isCompleted ? true : false}>
                  {todo.content}
                </Styled.MyListItem>
              </div>
              <Styled.ButtonCont>
                <DynamicButton
                  variant="success"
                  onClick={() => handleDoneButtonClick(todo.id)}
                >
                  Mark {todo.isCompleted ? "Undone" : "Done"}
                </DynamicButton>
                <DynamicButton
                  className="round"
                  onClick={() => handleDeleteButtonClick(todo.id)}
                >
                  X
                </DynamicButton>
              </Styled.ButtonCont>
            </FlexCont>
          ))}
        </FlexColCont>
      </ul>
    </Styled.TodoCont>
  );
};

export default Todo;
