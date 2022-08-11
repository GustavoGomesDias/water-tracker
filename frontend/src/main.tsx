import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App'
import LoadingProvider from './context/LoadingContext'
import ToastProvider from './context/ToastContext'
import ShowAddFormProvider from './context/ShowAddFormContext'

const container = document.getElementById('root')

const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <LoadingProvider>
      <ShowAddFormProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </ShowAddFormProvider>
    </LoadingProvider>
  </React.StrictMode>
)
