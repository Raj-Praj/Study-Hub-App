import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './assets/globals.css'
import Hero from './pages/Hero'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Hero/>
  
  </StrictMode>,
)
