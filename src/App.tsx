import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Index from './pages/Index';
import Register from './pages/Register';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
