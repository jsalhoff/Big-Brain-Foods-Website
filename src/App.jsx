import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Macros from './pages/Macros';
import Subscription from './pages/Subscription';
import Loyalty from './pages/Loyalty';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/macros" element={<Macros />} />
      <Route path="/subscription" element={<Subscription />} />
      <Route path="/loyalty" element={<Loyalty />} />
    </Routes>
  );
}

export default App;