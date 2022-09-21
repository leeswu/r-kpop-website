import React from 'react';
import Charts from './components/charts';
import Homepage from './components/homepage';
import { Routes, Route } from 'react-router-dom';
// import './app.css';

class App extends React.Component {
  render() {
    return (
      <div className='grad'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='charts/:groupName' element={<Charts />} />
        </Routes>
      </div>
    );
  }
}

export default App;

