import React from 'react';
import Charts from './components/charts';
import Homepage from './components/homepage';
import {Routes, Route} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='charts/:groupName' element={<Charts/>}/>
      </Routes>
    );
  }
}

export default App;

