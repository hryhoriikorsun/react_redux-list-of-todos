import { useEffect, useState } from 'react';
import { getUser } from './../api';
import { User } from './../types/User';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './../app/store';

export const useTodoModal = () => {
  const [isLoading, setisLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  const dispatch = useDispatch();
  const selectedTodo = useSelector((state: RootState) => state.currentTodo);

  const userId = selectedTodo?.userId ?? 0;

  useEffect(() => {
    getUser(userId)
      .then(userFromServer => {
        setUser(userFromServer);
      })
      .catch(error => {
        throw new Error(error);
      })
      .finally(() => setisLoading(false));
  }, [userId]);

  return {
    isLoading,
    user,
    selectedTodo,
    dispatch,
  };
};
