import { useEffect } from 'react';
import { useToast } from '@hooks';

export interface ToastProps {
  id: number
  message: string
}

export const Toast = ({ id, message }: ToastProps): JSX.Element => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [id, removeToast]);

  return (
    <div className="wrapper">
      <span className="time" />
      <p className="content">
        {message}
      </p>
    </div>
  );
};