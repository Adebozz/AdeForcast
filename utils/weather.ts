// utils/weather.ts
import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeather = async (location: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: location,
        appid: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
        units: 'metric', // or 'imperial' for Fahrenheit
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
