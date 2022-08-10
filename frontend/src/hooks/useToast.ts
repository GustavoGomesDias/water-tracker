import { useContext } from 'react';
import { ToastContext } from '../context/ToastContext';

export const useToast = () => {
  const toastHelpers = useContext(ToastContext);

  return toastHelpers;
};
