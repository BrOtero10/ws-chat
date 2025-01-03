import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './Router.jsx'
import { WebSocketProvider } from './contexts/WebSocketContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WebSocketProvider>
      <Router />
    </WebSocketProvider>
  </StrictMode>,
)
