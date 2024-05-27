import React from 'react'

import '../App.css';
import Home from './Home';
import NavBar from './NavBar';
import MenuItem from './MenuItem';
import { useState } from 'react';
import { fakeMenuItems, fakeMerchItems } from '../fakeData';

export default function AboutUs() {
  return (
    <div className='aboutUs-div' style={{textAlign: 'center', fontSize: '5em'}}>A little about us</div>
  )
}