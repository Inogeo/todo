import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'uikit/dist/css/uikit.css';
import "uikit/dist/js/uikit.min.js"; 
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
