import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// React Query Configgg ;v
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

// Framer Motion Config
import { AnimatePresence } from 'framer-motion'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AnimatePresence mode='wait'>
          <App />
        </AnimatePresence>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
)