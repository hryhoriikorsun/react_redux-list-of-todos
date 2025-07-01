import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Todo } from '../types/Todo';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [] as Todo[],
  reducers: {
    setTodos(_, { payload }: PayloadAction<Todo[]>) {
      return payload;
    },
    addTodo(todos, { payload }: PayloadAction<Todo>) {
      todos.push(payload);
    },
    removeTodo(todos, { payload }: PayloadAction<number>) {
      return todos.filter(todo => todo.id !== payload);
    },
  },
});

export const { setTodos, addTodo, removeTodo } = todosSlice.actions;
