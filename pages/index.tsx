import { useState } from 'react';
import WeatherCard from '../components/weatherCard';
import { fetchWeather } from '../utils/weather';

export default function Home() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetchWeather = async () => {
    setLoading(true);
    try {
      const data = await fetchWeather(location);
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
          className="border p-2 rounded w-full"
        />
        <button
          onClick={handleFetchWeather}
          className="mt-4 bg-blue-500 text-white p-2 rounded"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Get Weather'}
        </button>
        {weatherData && <WeatherCard data={weatherData} />}
      </div>
    </div>
  );
}
