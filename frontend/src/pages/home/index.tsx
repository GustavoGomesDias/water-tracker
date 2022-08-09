import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Logo } from '@components';
import { ImEnter } from 'react-icons/im';
import './home.css';

export function Home() {
  const navigate = useNavigate()
  const handleEnterInApp = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/main');
  }


  return (
    <div id="App">
      <Logo />
      
      <Button handleClick={handleEnterInApp} Icon={ImEnter} tooltipText="Entrar no app" />
    </div>
  )
}
