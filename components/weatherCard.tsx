// components/WeatherCard.tsx
import React from 'react';

type WeatherData = {
  name: string;
  main: { temp: number; humidity: number };
  weather: { description: string }[];
};

interface WeatherCardProps {
  data: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold">{data.name}</h2>
      <p>{data.weather[0].description}</p>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
    </div>
  );
};

export default WeatherCard;
