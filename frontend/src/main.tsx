import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App'
import LoadingProvider from './context/LoadingContext'
import ToastProvider from './context/ToastContext'

const container = document.getElementById('root')

const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <LoadingProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </LoadingProvider>
  </React.StrictMode>
)
