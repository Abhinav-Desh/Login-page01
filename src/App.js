import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Mainpage from './components/Mainpage';
import Table from './components/Table'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/agents" element={<Table />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
