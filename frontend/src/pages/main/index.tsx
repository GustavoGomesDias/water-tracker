import { MouseEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillGearFill } from 'react-icons/bs';
import { BiHistory } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';

import { Back, Button, } from '@components';
import { useShowAddForm, useTracker } from '@hooks';

import './main.css';
import { backend } from '@wails/go/models';

export const Main = (): JSX.Element => {
  const [mainTracker, setMainTracker] = useState<backend.Tracker>();
  const { showForm } = useShowAddForm();
  const { percent, getTrackerConfig, tracker } = useTracker();
  const full = 150;


  const navigate = useNavigate();
  const handleHistory = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/history');
  }

  const handleSetup = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/setup');
  }

  useEffect(() => {
    const handleSetTracker = async () => {
      await getTrackerConfig()
      if (tracker === undefined) {
        navigate('/setup');
      }

      setMainTracker(tracker);
    }

    handleSetTracker();
  }, [tracker]);

  useEffect(() => {
    const handleGetProperties = () => {

      const result = full - (full * (percent / 100));

      const glass = document.querySelector<HTMLDivElement>('.glass');

      if (glass) {
        glass.style.setProperty('--top', `${result}px`)
      }
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
              <span>Objetivo: {mainTracker ? mainTracker?.defaultQuantity : 0}ml</span>
              {/* <span>Já tomou: {mainTracker ? mainTracker?.actualQuantity : 0}ml</span> */}
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
