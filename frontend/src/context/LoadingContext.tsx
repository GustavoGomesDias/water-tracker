import { Transition } from '@components';
import { createContext, useState, useCallback } from 'react';
import { ProviderProps } from './context';

export interface LoadingContextProps {
  handleIsLoading(): void
  handleNotIsLoading(): void
}

export const LoadingContext = createContext({} as LoadingContextProps);

const LoadingProvider = ({ children }: ProviderProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleIsLoading = useCallback(
    () => setIsLoading(true),
    [setIsLoading]
  );

  const handleNotIsLoading = useCallback(
    () => {
      setIsLoading(false);
    },
    [setIsLoading]
  );

  return (
    <LoadingContext.Provider value={{
      handleIsLoading,
      handleNotIsLoading,
    }}>
      {isLoading && <Transition />}
      {children}
    </LoadingContext.Provider>
  );
}

export default LoadingProvider;