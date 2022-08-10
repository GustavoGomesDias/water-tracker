import { useEffect, useState } from 'react';
import './transition.css';

export const Transition = (): JSX.Element => {

  return (
    <div className="overlay">
      <div className="loader" />

      <span className="author">github: @GustavoGomesDias</span>
    </div>
  )
};
