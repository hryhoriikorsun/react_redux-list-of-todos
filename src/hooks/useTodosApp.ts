import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTodos } from '../features/todos';
import { RootState } from '../app/store';
import { getTodos } from '../api';

export const useTodosApp = () => {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const selectedTodo = useSelector((state: RootState) => state.currentTodo);

  useEffect(() => {
    getTodos()
      .then(todoFromServer => dispatch(setTodos(todoFromServer)))
      .catch(error => {
        throw new Error(error);
      })
      .finally(() => setIsLoading(false));
  }, [dispatch]);

  return {
    isLoading,
    selectedTodo,
  };
};
