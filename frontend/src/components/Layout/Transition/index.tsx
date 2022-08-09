import { useEffect, useState } from 'react';
import './transition.css';

export const Transition = (): JSX.Element => {

  const handleOnCloseTransition = () => {
    const transition = document.querySelector<HTMLDivElement>('.transition');
    transition?.classList.add('displayNone');
  }

  setTimeout(() => handleOnCloseTransition(), 1500);

  return (
    <div className="transition">
      <div className="overlay">
        <div className="loader" />

        <span className="author">github: @GustavoGomesDias</span>
      </div>
    </div>
  )
};
