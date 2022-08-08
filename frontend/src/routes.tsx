import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { History, Home, Main, Setup } from './pages';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Main />} path='/main' />
        <Route element={<History />} path='/history' />
        <Route element={<Setup />} path='/setup' />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;