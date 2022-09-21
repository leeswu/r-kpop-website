import React, { Component } from 'react';
import SearchBar from './searchbar'
import Introduction from './introduction';
import './homepage.css'

function Homepage() {
  return (
    <div className='homepage'>
      <div className='search'><SearchBar /></div>
      <div className='intro'><Introduction/></div>
    </div>
  );
}

export default Homepage;