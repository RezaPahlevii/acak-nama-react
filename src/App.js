import './App.css';
// import Home from './pages/Home';
import List from './pages/List';
import NavigatorBar from './pages/NavigatorBar';
import Home from './pages/Home';
import React from 'react';

function App() {
  return (
    <div>
      <NavigatorBar />,
      <List />,
      <Home />
    </div>
    // <Home />
  );
}

export default App;
