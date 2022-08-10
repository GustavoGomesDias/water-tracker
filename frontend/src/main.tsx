import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App'
import LoadingProvider from './context/LoadingContext'

const container = document.getElementById('root')

const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <LoadingProvider>
      <App />
    </LoadingProvider>
  </React.StrictMode>
)
