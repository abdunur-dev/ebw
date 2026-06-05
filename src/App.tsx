import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Index from './pages/Index';
import Register from './pages/Register';
import Partnership from './pages/Partnership';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/register" element={<Register />} />
      <Route path="/partnership" element={<Partnership />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
