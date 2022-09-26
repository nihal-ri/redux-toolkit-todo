import React, { useEffect, useState } from "react";
import * as Styled from "./styles";

import { useAppDispatch, useAppSelector } from "logic/hooks";
import { FlexColCont, FlexCont } from "shared/styles/styled";
import { DynamicButton } from "shared/button/style";
import { addTodo, deleteTodo, markTodoDone } from "logic/slice/todo/todoSlice";
import { useNavigate } from "react-router-dom";

const Todo = () => {
  const [contentValue, setContentValue] = useState("");
  const { todo, userData } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData.user.name) {
      navigate("/error");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { todos: allTodos } = todo;

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
    <Styled.AppWrapper>
      <h1>Hello, {userData.user.name.split(" ")[0]}</h1>
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
    </Styled.AppWrapper>
  );
};

export default Todo;
