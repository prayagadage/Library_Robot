import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<div className="text-white">Explore Page (Coming Soon)</div>} />
          <Route path="/library" element={<div className="text-white">My Library (Coming Soon)</div>} />
          <Route path="/saved" element={<div className="text-white">Saved Books (Coming Soon)</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
