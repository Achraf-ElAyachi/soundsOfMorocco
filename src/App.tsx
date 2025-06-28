import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Events from './pages/Events';
import Donations from './pages/Donations';
import Shop from './pages/Shop';
import About from './pages/About';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/events" element={<Events />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/project-details/:id" element={<ProjectDetails />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;