import { useEffect } from 'react';
import { useToast } from '@hooks';
import './toast.css';

export interface ToastProps {
  type: 'error' | 'success'
  id: number
  message: string
}

export const Toast = ({ id, message, type }: ToastProps): JSX.Element => {
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
    <div className={`wrapper ${type}`}>
      <p className="content">
        {message}
      </p>
      <span className="time" />
    </div>
  );
};