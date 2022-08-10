import { FormEvent, MouseEvent } from 'react';
import { AiOutlinePlus } from "react-icons/ai";

import { Button, Input } from "@components";

import './addmore.css'

export const AddForm = (): JSX.Element => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  }

  const handleOnClose = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  }

  return (
    <div className="add">
      <form className="add-wrapper" onSubmit={handleSubmit}>
        <Input labelTxt="Quantidade que você tomou (ml)" value={''} type="number" handleOnChange={function (value: any): void {
          throw new Error('Function not implemented.');
        }} />

        <div className="options">
          <Button type="submit" Icon={AiOutlinePlus} tooltipText="Adicionar drink" />
          <Button handleClick={handleOnClose} Icon={AiOutlinePlus} tooltipText="Adicionar drink" />
        </div>

      </form>
    </div>
  );
};
