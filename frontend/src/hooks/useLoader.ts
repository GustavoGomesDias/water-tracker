import { useContext } from 'react';
import { LoadingContext } from '../context/LoadingContext';

export const useLoad = () => {
  const loadHelpers = useContext(LoadingContext);

  return loadHelpers;
};
