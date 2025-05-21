import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  return (
    <>
      {/* Sistema de notificaciones */}
      <Toaster position="top-right" />
      
      {/* Gestión de rutas con lazy loading */}
      <Suspense fallback={<div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-uvm-primary"></div>
      </div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App