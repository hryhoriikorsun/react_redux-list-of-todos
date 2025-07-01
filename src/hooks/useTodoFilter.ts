import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './../app/store';

export const useTodoFilter = () => {
  const dispatch = useDispatch();
  const { query } = useSelector((state: RootState) => state.filter);

  return {
    dispatch,
    query,
  };
};
