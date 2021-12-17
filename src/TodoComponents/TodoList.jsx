import React from "react";
import { useRecoilValue } from "recoil";
import TodoListFilters from "./TodoListFilters";
import { filteredTodoListState } from "../todoEffects";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";
import TodoListStats from "./todoListStats";



const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <div>
      <TodoListFilters/>
      <TodoListStats/>
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
};

export default TodoList;
