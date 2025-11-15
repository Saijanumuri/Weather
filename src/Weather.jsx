import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./index.css";

function Weather() {
  let [city, setCity] = useState("New Delhi");
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e4e3b71c21650f6ad41739344b423737&units=metric`;
  let [data, setData] = useState({});

  useEffect(() => {
    async function getWeather() {
      const response = await fetch(url);
      const dataa = await response.json();
      setData(dataa);
    }
    getWeather();
  }, [city]);

  function search() {
    let city1 = document.getElementById("city").value;
    setCity(city1);
  }

  return (
    <div className="outer">
      <div className="search-box">
        <input
          id="city"
          placeholder="Enter City..."
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={search}>
          <FaSearch />
        </button>
      </div>

      <div className="weather-box">
        <h1>{data?.main?.temp}°C</h1>
        <h2>{data?.name}</h2>

        <p>Humidity: {data?.main?.humidity} 💧</p>
        <p>Wind: {(data?.wind?.speed * 3.6).toFixed(2)} km/h</p>
      </div>
    </div>
  );
}

export default Weather;
