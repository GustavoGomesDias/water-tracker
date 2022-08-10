import { MouseEvent, useEffect, useState } from 'react';
import './main.css';
import { Transition, Back, Button } from '@components';
import { useNavigate } from 'react-router-dom';
import { BsFillGearFill } from 'react-icons/bs';
import { BiHistory } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import { useLoad } from '@hooks';

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
    const handleActualResult = () => {
      handleIsLoading();
      const actualPercent = 25;
  
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
