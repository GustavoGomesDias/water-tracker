import { MouseEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillGearFill } from 'react-icons/bs';
import { BiHistory } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';

import { AddForm, Back, Button, Input } from '@components';
import { useLoad } from '@hooks';
import { GetActualQuantity } from '@backend';

import './main.css';

export const Main = (): JSX.Element => {
  const [percent, setPercent] = useState<number>(0);
  const full = 150;

  const { handleIsLoading, handleNotIsLoading } = useLoad();

  const navigate = useNavigate()
  const handleHistory = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/history');
  }

  const handleSetup = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/setup');
  }

  useEffect(() => {
    const handleActualResult = async () => {
      handleIsLoading();
      const actualPercent = await GetActualQuantity();

      const result = full - (full * (actualPercent / 100));

      const glass = document.querySelector<HTMLDivElement>('.glass');

      console.log(result);

      if (glass) {
        glass.style.setProperty('--top', `${result}px`)
      }

      setPercent(actualPercent);
      handleNotIsLoading();
    }

    handleActualResult();
  }, []);



  return (
    <>
      <AddForm />
      <div className="main">
        <Back path='/' />
        <div className="tracker">
          <div className="count">
            <p className="percent">{percent}%</p>
            <div className="glass" />
          </div>
          <div className="options">
            <Button handleClick={handleSetup} Icon={BsFillGearFill} tooltipText="Configurar o tracker" />
            <Button handleClick={handleHistory} Icon={BiHistory} tooltipText="Ver histórico" />
            <Button handleClick={handleHistory} Icon={AiOutlinePlus} tooltipText="Adicionar drink" />
          </div>
        </div>
      </div>
    </>
  )

};
