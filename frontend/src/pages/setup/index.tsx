import { ChangeEvent, useState } from 'react';
import { Back, Button, Input } from '@components';
import './setup.css';
import { AiOutlinePlus } from 'react-icons/ai';

export const Setup = (): JSX.Element => {
  const [defaultQuantity, setDefaultQuantity] = useState<number>(0);

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
            labelTxt="Quantidade objetivo (em ml)"
            value={defaultQuantity} type="number"
            handleOnChange={setDefaultQuantity}
          />
          <Input
            labelTxt="Quantidade objetivo (em ml)"
            value={defaultQuantity} type="number"
            handleOnChange={setDefaultQuantity}
          />
          <Input
            labelTxt="Quantidade objetivo (em ml)"
            value={defaultQuantity} type="number"
            handleOnChange={setDefaultQuantity}
          />
          <Input
            labelTxt="Quantidade objetivo (em ml)"
            value={defaultQuantity} type="number"
            handleOnChange={setDefaultQuantity}
          />
        </form>
      </div>
    </div>
  )
};