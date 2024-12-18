"use client";

import { useState } from "react";
import WeatherCard from "../components/weatherCard";

export default function Home() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetchWeather = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/weather", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ location }),
      });
      const data = await response.json();
      setWeatherData(data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="font-black text-3xl mt-0 flex p-10 absolute">ADE-ForCast</div>
    <div className="bg-gray h-screen flex flex-col items-center justify-center">
      
      <div className="p-8 rounded-lg flex gap-10">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
          className="border p-2 rounded w-full"
        />
        <button
          onClick={handleFetchWeather}
          className="bg-black text-white w-full hover:bg-[#00000080] rounded-md"
          disabled={loading}
        >
          {loading ? "Loading...." : "Get Weather"}
        </button>
      </div>  
      
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
    </div>
  );
}
