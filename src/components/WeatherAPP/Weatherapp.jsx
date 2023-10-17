import React, { useState } from 'react'
import './Weatherapp.css'
import search_icon from '../Assets/search.png'
import cloud_icon from '../Assets/cloud.png'
import wind_icon from '../Assets/wind.png'
import humidity_icon from '../Assets/humidity.png'
import clear_icon from '../Assets/clear.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import drizzle_icon from '../Assets/drizzle.png';

export const Weatherapp = () => {
  let api_key="f8fee2ed4172f1d6f52f758447ca889d";
  const[wicon,setWicon]=useState(cloud_icon);
  const search=async ()=>{
const element=document.getElementsByClassName('inputCity')
if(element[0].value===""){
  return 0;
}
let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
let response = await fetch(url);

const humidity = document.querySelector('.humidity-percentage');
const wind = document.querySelector('.wind-speed');
const temperature = document.querySelector('.weather-temp');
const location = document.querySelector('.weather-location');
if (response.ok) {
  let data = await response.json();
  humidity.innerHTML = data.main.humidity + " %";
  wind.innerHTML = Math.floor(data.wind.speed )+ " km/h";
  temperature.innerHTML = Math.floor(data.main.temp )+ "°C";
  location.innerHTML = data.name;
  if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
    setWicon(clear_icon);
  } else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
    setWicon(cloud_icon);
  } else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
    setWicon(drizzle_icon);
  } else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
    setWicon(snow_icon);
  } else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
    setWicon(rain_icon);
  } else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
    setWicon(rain_icon);
  } else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
    setWicon(snow_icon);
  } else {
    setWicon(clear_icon);
  }
}


  }
  
  return (
    <div className='container'>
      <div className="top-bar">
        <input type="text" className="inputCity" placeholder="Search"/>
        <div className='search_icon' onClick={()=>{search()}}>
          <img src={search_icon} alt='search_icon' />
        </div>
      </div>
      <div className='weather-image'>
        <img src={wicon} alt=''/>
      </div>
      <div className='weather-temp'> 24°C</div>
      <div className='weather-location'>New Delhi</div>
      <div className='data-container'>
        <div className='elements'>
          <img src={humidity_icon} alt='' className='icon'/>
          <div className='data'>
            <div className='humidity-percentage'>32%</div>
            <div className='text'>Humidity</div>
            </div>
            </div>
            <div className='elements'>
          <img src={wind_icon} alt='' className='icon'/>
          <div className='data'>
            <div className='wind-speed'>18km/hr</div>
            <div className='text'>Wind speed</div>
            </div>
            </div>
        </div>
            </div>
  )
}
export default Weatherapp