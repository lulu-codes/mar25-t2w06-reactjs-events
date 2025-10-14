import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// can import multiple files, separated by commas
import {App} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
