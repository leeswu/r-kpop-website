import React, { Component } from 'react';
import SearchBar from './searchbar'
import Introduction from './introduction';
import { Card } from '@mui/material';
import './homepage.css'

function Homepage() {
  return (
    <div className='homepage'>
      <Card className='search' elevation='4' style={{overflow: 'auto'}}>
        <SearchBar />
      </Card>
      <div className='intro'><Introduction /></div>
    </div>
  );
}

export default Homepage;