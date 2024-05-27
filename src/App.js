import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import MenuItem from './components/MenuItem';
import AboutUs from './components/AboutUs';
import { fakeMenuItems, fakeMerchItems } from './fakeData';



function App() {

  const [menuItems, setMenuItems] = useState(fakeMenuItems);
  const [merchItems, setMerchItems] = useState(fakeMerchItems);
  const [showAboutUs, setShowAboutUs] = useState(false);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about-us" element={<AboutUs />} /> */}
        {/* Route to Home component */}
        <Route path="/about-us" element={<AboutUs />} /> {/* Route to AboutUs component if showAboutUs is true */}
        {/* Add more routes as needed */}
      </Routes>
    <>

    <Home />
    <fakeData />
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <h1 className={'my-3 text-cnet'}>Coffee Shop Menu</h1>
        </div>
        <div className='row my-5'>
          <div className='h3'>Coffee</div>
          {menuItems && menuItems.length > 0 && menuItems.map((menuItem) => (
            <MenuItem key={menuItem.id} item={menuItem.item} price= {menuItem.price} image={menuItem.image} altText={menuItem.item} />
          ))}
        </div>
        <div className='row'>
          <div className='h3'>Merchandise</div>
          {merchItems && merchItems.length > 0 && merchItems.map((merchItem) => (
            <MenuItem key={merchItem.id} item={merchItem.item} price={merchItem.price} image={merchItem.image} altText={merchItem.item} />
          ))}
        </div>
      </div>
    </div>
    </>
    </Router>
    );
}

export default App;
