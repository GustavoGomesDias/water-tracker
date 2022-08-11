import { FormEvent, MouseEvent, useState } from 'react';
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { GiSave } from "react-icons/gi";
import { SetActualQuantity } from '@backend';

import { Button, Input } from "@components";

import './addmore.css'
import { useShowAddForm, useToast } from '@hooks';

export const AddForm = (): JSX.Element => {
  const [value, setValue] = useState<number>(0);

  const { addToast } = useToast();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value <= 0) {
      addToast('Valor precisa ser maior que 0.', 'error');
      return;
    }

    SetActualQuantity(String(value));
    addToast('Valor adicionado com sucesso!.');
  }

  const { closeForm } = useShowAddForm();

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
