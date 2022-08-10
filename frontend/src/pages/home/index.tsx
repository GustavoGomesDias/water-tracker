import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Logo } from '@components';
import { ImEnter } from 'react-icons/im';
import './home.css';
import { BsFillGearFill } from 'react-icons/bs';

export function Home() {
  const navigate = useNavigate()
  const handleEnterInApp = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/main');
  }

  const handleSetup = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/setup');
  }


  return (
    <div id="App">
      <Logo />
      <div className="options">
        <Button handleClick={handleEnterInApp} Icon={ImEnter} tooltipText="Entrar no app" />
        <Button handleClick={handleSetup} Icon={BsFillGearFill} tooltipText="Configurar o tracker" />
      </div>
    </div>
  )
}
