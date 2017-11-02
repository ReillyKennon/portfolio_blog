import React from 'react';
import Routes from './components/Routes';
import Navbar from './components/Navbar';

import './App.css';

const App = () => (
  <div>
    <Navbar />
    <div className="container">
      <Routes />
    </div>
  </div>
)
export default App;
