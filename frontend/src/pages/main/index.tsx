import React from 'react';
import './main.css';
import { Link } from 'react-router-dom';

export const Main = (): JSX.Element => (
  <button>
    <Link to='/'>Voltar</Link>
  </button>
);
