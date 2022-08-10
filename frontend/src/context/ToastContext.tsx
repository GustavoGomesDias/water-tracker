import { createContext, useCallback, useState } from 'react'
import { Toast } from '@components'
import { ProviderProps } from './context'

export interface ToastProps {
  id: number
  text: string
}

export interface ToastContextProps {
  addToast(text: string): void
  removeToast(id: number): void
}

export const ToastContext = createContext({} as ToastContextProps);

let id = 1;

const ToastProvider = ({ children }: ProviderProps) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = useCallback(
    (text: string) => {
      setToasts((toasts: ToastProps[]) => [
        ...toasts,
        {
          id: id++,
          text
        }
      ]);
    },
    [setToasts]
  );

  const removeToast = useCallback(
    (id: number) => {
      setToasts((toasts: ToastProps[]) => toasts.filter(t => t.id !== id));
    },
    [setToasts]
  );

  return (
    <ToastContext.Provider
      value={{
        addToast,
        removeToast
      }}
    >
      <>
        {toasts.map((toast) => (<Toast id={toast.id} message={toast.text} key={toast.text + toast.id} />))}
        {children}
      </>
    </ToastContext.Provider>
  );
};

export default ToastProvider;