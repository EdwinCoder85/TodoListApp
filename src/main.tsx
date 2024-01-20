import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/styles.css'
import { TodoWrapperApp } from './components/TodoWrapperApp'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodoWrapperApp></TodoWrapperApp>
  </React.StrictMode>,
)
