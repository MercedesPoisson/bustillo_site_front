import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

interface LocationData {
  name: string;
  region: string;
  country: string;
}

interface CurrentWeatherData {
  last_updated: string;
  temp_c: number;
  condition: {
    text: string;
    icon: string;
  };
}

interface WeatherData {
  location: LocationData;
  current: CurrentWeatherData;
}

function Weather() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [t, i18m] = useTranslation("global")

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await axios.get<WeatherData>(
          'http://api.weatherapi.com/v1/current.json?key=c74550d4a3b24159986154923242702&q=bariloche&aqi=no'
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
    fetchWeather();
  }, []);

  return (
    <div className="bg-white shadow-md rounded-md p-4 ">
        <h1>{t("bariloche.pronostico")}</h1>
      {weatherData && (
        
        <div className="flex justify-between items-center">
          <div  className="flex items-center">
            <p className="text-xl font-bold mr-2">{weatherData.current.temp_c}°C</p>
          <img src={`https:${weatherData.current.condition.icon}`} alt="Weather Icon"  className="w-12 h-12"/>
          <p>{weatherData.current.condition.text}</p>
          
          </div>
          <h2 className="text-sm font-semibold">San Carlos de Bariloche</h2>
          <h3 className="text-sm">{weatherData.location.region}, {weatherData.location.country}</h3>
          
          
          
          
        </div>
      )}
    </div>
  );
}

export default Weather;