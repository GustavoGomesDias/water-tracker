import { useState, FormEvent } from 'react';
import { Back, Button, Input } from '@components';
import { SaveTrackerConfig } from '@backend';
import './setup.css';
import { useLoad, useToast, useTracker } from '@hooks';
import { useNavigate } from 'react-router-dom';
// import { backend } from '@wails/go/models';

export const Setup = (): JSX.Element => {
  const [defaultQuantity, setDefaultQuantity] = useState<number>(0);
  const [alertTime, setAlertTime] = useState<number>(0);

  const { handleIsLoading, handleNotIsLoading } = useLoad();
  const { addToast } = useToast();
  const { getTrackerConfig } = useTracker();
  const navigate  = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    handleIsLoading()
    e.preventDefault();

    if (defaultQuantity <= 0 || alertTime <= 0) {
      handleNotIsLoading();
      addToast('O objetivo e o alerta tem que ser maior que zero!', 'error');
      return;
    }

    SaveTrackerConfig(JSON.stringify({ defaultQuantity, alertTime, actualQuantity: 0 }));
    setTimeout(async () => await getTrackerConfig(), 1000)
    setDefaultQuantity(0);
    setAlertTime(0)
    handleNotIsLoading();
    addToast('Configuração adicionada com sucesso!');
    navigate('/main');
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