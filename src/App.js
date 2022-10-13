import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  return (
    <div className="section">
      <h2 className='title'>OUR MENU</h2>
      <div className="underline"></div>
      <Categories />
      <Menu items = {items} />
    
     
    </div>
  );
}

export default App;
