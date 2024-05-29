import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import MenuItem from './components/MenuItem';
import AboutUs from './components/AboutUs';
import { fakeMenuItems, fakeMerchItems } from './fakeData';
import Weather from './components/Weather';



function App() {

  const weatherApiKey = '8a51ec2e33880388d6bb9cdcc9dd58ad';
  const [userCity, setUserCity] = useState(null);
  const [currentTemp, setCurrentTemp] = useState(null);
  const [menuItems, setMenuItems] = useState(fakeMenuItems);
  const [merchItems, setMerchItems] = useState(fakeMerchItems);
  const [showAboutUs, setShowAboutUs] = useState(false);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('position', position)
          const { latitude, longitude } = position.coords;
          // //Anchorage 61.2181, -149.9003
          // getWeatherData(61.2181, -149.9003)
          // // Death Valley 36.4614, -116.8656
          // getWeatherData(36.4614, -116.8656)
          // //browser
          getWeatherData(latitude, longitude)
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, [])

  async function getWeatherData(lat, lon){
    console.log(lat)
    console.log(lon)
    let weatherAPIResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=imperial`);
    console.log('weatherAPIResponse', weatherAPIResponse)
    if(weatherAPIResponse.status != 200){
      alert('could not get weather data')
    }
    let jsonData = await weatherAPIResponse.json()
    console.log('jsonData', jsonData)
    setUserCity(jsonData.name)
    setCurrentTemp(Math.round(jsonData.main.temp))
  }

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

        <Weather currentTemp={currentTemp} userCity={userCity} />
        
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
