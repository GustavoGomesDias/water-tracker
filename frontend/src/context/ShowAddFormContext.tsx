import { AddForm } from '@components';
import { createContext, useState, useCallback } from 'react';
import { ProviderProps } from './context';

export interface ShowAddFormProps {
  showForm(): void
  closeForm(): void
}

export const ShowAddFormContext = createContext({} as ShowAddFormProps);

const ShowAddFormProvider = ({ children }: ProviderProps): JSX.Element => {
  const [isShowForm, setIsShowForm] = useState<boolean>(false);

  const showForm = useCallback(
    () => {
      console.log('show');
      setIsShowForm(true)
    },
    [setIsShowForm]
  );

  const closeForm = useCallback(
    () => {
      setIsShowForm(false);
    },
    [setIsShowForm]
  );

  return (
    <ShowAddFormContext.Provider value={{
      showForm,
      closeForm,
    }}>
      {isShowForm && <AddForm />}
      {children}
    </ShowAddFormContext.Provider>
  );
}

export default ShowAddFormProvider;