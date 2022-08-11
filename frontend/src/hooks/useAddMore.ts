import { useContext } from 'react';
import { ShowAddFormContext } from '../context/ShowAddFormContext';

export const useShowAddForm = () => {
  const showHelper = useContext(ShowAddFormContext);

  return showHelper;
};
