import React from 'react';
import './main.css';
import { Transition, Back } from '@components';

export const Main = (): JSX.Element => (
  <>
    <Transition />
    <div className="main">
      <Back />

      <div className="tracker">
        
      </div>
    </div>
  </>
);
