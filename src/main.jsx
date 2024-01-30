import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "@radix-ui/themes/styles.css" 
import { Theme } from "@radix-ui/themes"
import './index.css'
import { TaskProvider } from './services/TaskContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme appearance='dark'>
      <TaskProvider>
       <App/>
      </TaskProvider>
    </Theme>
  </React.StrictMode>,
)
