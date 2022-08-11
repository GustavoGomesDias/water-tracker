import { MouseEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillGearFill } from 'react-icons/bs';
import { BiHistory } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';

import { Back, Button, } from '@components';
import { useLoad, useShowAddForm } from '@hooks';
import { GetActualPercent, GetTracker } from '@backend';
import { backend } from '@wails/go/models';

import './main.css';

export const Main = (): JSX.Element => {
  const [percent, setPercent] = useState<number>(0);
  const [trackerInfo, setTrackerInfo] = useState<backend.Tracker>();
  const full = 150;

  const { handleIsLoading, handleNotIsLoading } = useLoad();
  const { showForm } = useShowAddForm();

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
    const handleGetProperties = async () => {
      handleIsLoading();
      const actualPercent = await GetActualPercent();
      const tracker = await GetTracker();

      const result = full - (full * (actualPercent / 100));

      const glass = document.querySelector<HTMLDivElement>('.glass');

      if (glass) {
        console.log('entrou')
        glass.style.setProperty('--top', `${result}px`)
      }

      if (tracker.actualQuantity) {
        setTrackerInfo(tracker);
      }

      setPercent(actualPercent);
      handleNotIsLoading();
    }

    handleGetProperties();
  }, []);



  return (
    <>
      <div className="main">
        <Back path='/' />
        <div className="tracker">
          <div className="count">
            <p className="percent">{percent}%</p>
            <div className="glass" />
            <div className="information">
              <span>Objetivo: {trackerInfo ? trackerInfo?.defaultQuantity : 0}ml</span>
              <span>Já tomou: {trackerInfo ? trackerInfo?.actualQuantity : 0}ml</span>
            </div>
          </div>
          <div className="options">
            <Button handleClick={handleSetup} Icon={BsFillGearFill} tooltipText="Configurar o tracker" />
            <Button handleClick={handleHistory} Icon={BiHistory} tooltipText="Ver histórico" />
            <Button handleClick={showForm} Icon={AiOutlinePlus} tooltipText="Adicionar drink" />
          </div>
        </div>
      </div>
    </>
  )

};
