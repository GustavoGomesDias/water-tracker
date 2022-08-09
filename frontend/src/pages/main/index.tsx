import React from 'react';
import './main.css';
import { Link } from 'react-router-dom';
import { Transition } from '@components';

export const Main = (): JSX.Element => (
  <>
    <Transition />
    <button>
      <Link to='/'>Voltar</Link>
    </button>
  </>
);
