import { useState, MouseEvent } from 'react';
import { Back, Button, Input } from '@components';
import './setup.css';

export const Setup = (): JSX.Element => {
  const [defaultQuantity, setDefaultQuantity] = useState<number>(0);

  const handleHistory = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  }

  return (
    <div className="main">
      <Back path='/main' />
      <div className="setup">
        <h1>Configurar Tracker</h1>
        <form className="setup">
          <Input
            labelTxt="Quantidade objetivo (em ml)"
            value={defaultQuantity} type="number"
            handleOnChange={setDefaultQuantity}
          />
          <Input
            labelTxt="Alerta de quanto em quanto tempo (minutos)"
            value={defaultQuantity} type="number"
            handleOnChange={setDefaultQuantity}
          />
          <Button handleClick={handleHistory} content="Salvar" tooltipText="Adicionar drink" />
        </form>
      </div>
    </div>
  )
};