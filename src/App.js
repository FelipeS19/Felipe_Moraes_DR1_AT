// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import AuthProvider from './contexts/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Form from './pages/Form';
import List from './pages/List';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import { EmployeeProvider }  from './contexts/EmployeeContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <EmployeeProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<PrivateRoute />}>
              <Route path="/form" element={<Form />} />
              <Route path="/list" element={<List />} />
            </Route>
          </Routes>
        </div>
      </Router>
      </EmployeeProvider>
    </AuthProvider>
  );
}

export default App;


