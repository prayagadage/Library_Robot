import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<div className="text-white bg-library-bg h-screen p-10">Explore Page (Coming Soon)</div>} />
        <Route path="/library" element={<div className="text-white bg-library-bg h-screen p-10">My Library (Coming Soon)</div>} />
        <Route path="/saved" element={<div className="text-white bg-library-bg h-screen p-10">Saved Books (Coming Soon)</div>} />
      </Routes>
    </Router>
  );
}

export default App;
