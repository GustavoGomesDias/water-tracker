import { useState, FormEvent } from 'react';
import { Back, Button, Input } from '@components';
import { SaveTrackerConfig } from '@wails/go/backend/App';
import './setup.css';
import { useLoad, useToast } from '@hooks';
// import { backend } from '@wails/go/models';

export const Setup = (): JSX.Element => {
  const [defaultQuantity, setDefaultQuantity] = useState<number>(0);
  const [alertTime, setAlertTime] = useState<number>(0);

  const { handleIsLoading, handleNotIsLoading } = useLoad();
  const { addToast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    handleIsLoading()
    e.preventDefault();

    if (defaultQuantity <= 0 || alertTime <= 0) {
      handleNotIsLoading();
      addToast('O objetivo e o alerta tem que ser maior que zero!', 'error');
      return;
    }

    addToast('Configuração adicionada com sucesso!');
    SaveTrackerConfig(JSON.stringify({ defaultQuantity, alertTime }));
    handleNotIsLoading();
  }

  return (
    <div className="main">
      <Back path='/main' />
      <div className="setup">
        <h1>Configurar Tracker</h1>
        <form className="setup" onSubmit={handleSubmit}>
          <Input
            labelTxt="Quantidade objetivo (em ml)"
            value={defaultQuantity} type="number"
            handleOnChange={setDefaultQuantity}
          />
          <Input
            labelTxt="Alerta de quanto em quanto tempo (minutos)"
            value={alertTime} type="number"
            handleOnChange={setAlertTime}
          />
          <Button content="Salvar" tooltipText="Salvar configurações" type="submit" />
        </form>
      </div>
    </div>
  )
};