import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Theme from './components/Theme'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <main className=' bg-gray-200 dark:bg-gray-900 transition-colors flex flex-col items-center pt-4'>
      <Theme />
      <App />
    </main>
  </>
)
