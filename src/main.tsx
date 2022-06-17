import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login/Login'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="d-flex">
        {/* <Sidebar /> */}
        <div className="w-100">
      
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/pages/dash-board" element={<Dashboard />} />
            <Route path="/pages/login" element={<Login />} />
          </Routes>
          
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
)
