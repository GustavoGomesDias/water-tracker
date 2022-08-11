import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App'
import LoadingProvider from './context/LoadingContext'
import ToastProvider from './context/ToastContext'
import ShowAddFormProvider from './context/ShowAddFormContext'
import TrackerProvider from './context/TrackerContext'

const container = document.getElementById('root')

const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <LoadingProvider>
      <TrackerProvider>
        <ToastProvider>
          <ShowAddFormProvider>
            <App />
          </ShowAddFormProvider>
        </ToastProvider>
      </TrackerProvider>
    </LoadingProvider>
  </React.StrictMode>
)
