import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router basename="/P12.OpenClassRooms">
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
