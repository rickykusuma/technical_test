import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import MainLayout from 'layouts/MainLayout'
function App() {
  return (
    <Routes>
      <Route path="/*" element={<MainLayout />} />
      <Route path="/" element={<Navigate to="/data-tables" replace />} />
    </Routes>
  )
}

export default App
