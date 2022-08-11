import { FormEvent, useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { GiSave } from "react-icons/gi";

import { SetActualQuantity } from '@backend';
import { Button, Input } from "@components";
import { useShowAddForm, useToast, useTracker } from '@hooks';

import './addmore.css'

export const AddForm = (): JSX.Element => {
  const [value, setValue] = useState<number>(0);

  const { addToast } = useToast();
  const { closeForm } = useShowAddForm();
  const { editActualQuantity, tracker } = useTracker();


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value <= 0) {
      addToast('Valor precisa ser maior que 0.', 'error');
      return;
    }

    if (tracker && (tracker.actualQuantity + value > tracker.defaultQuantity)) {
      return;
    }

    SetActualQuantity(String(value));
    editActualQuantity(value);
    addToast('Valor adicionado com sucesso!');
    setValue(0);
    closeForm();
  }

  return (
    <div className="add">
      <form className="add-wrapper" onSubmit={handleSubmit}>
        <Input labelTxt="Quantidade que você tomou (ml)" value={value} type="number" handleOnChange={setValue} />

        <div className="options">
          <Button type="submit" Icon={GiSave} tooltipText="Adicionar drink" />
          <Button handleClick={closeForm} Icon={AiOutlineClose} tooltipText="Fechar" />
        </div>

      </form>
    </div>
  );
};
