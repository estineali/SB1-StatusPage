import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fontsource/josefin-sans"; 
import "@fontsource/josefin-sans/700.css"; 
import "@fontsource/josefin-sans/600.css"; 
import App from './App.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
