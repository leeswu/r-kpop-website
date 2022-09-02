import React from 'react';
import Charts from './components/charts';
import SearchBar from './components/searchbar';
import {Routes, Route} from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path='/' element={<SearchBar/>}/>
        <Route path='charts/:groupName' element={<Charts/>}/>
      </Routes>
    );
  }
}

export default App;