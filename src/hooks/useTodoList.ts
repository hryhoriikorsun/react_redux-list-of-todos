import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './../app/store';
import { prepareTodos } from './../utils/prepareTodos';

export const useTodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);
  const selectedTodo = useSelector((state: RootState) => state.currentTodo);
  const { query, status } = useSelector((state: RootState) => state.filter);

  const visibleTodos = prepareTodos(todos, {
    searchByTitle: query,
    selectStatusTodos: status,
  });

  return { dispatch, selectedTodo, visibleTodos };
};
