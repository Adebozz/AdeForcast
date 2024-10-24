// utils/weather.ts
import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeather = async (location: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: location,
        appid: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data);
      throw new Error(error.response?.data.message || 'An error occurred');
    } else {
      throw new Error('An unexpected error occurred.');
    }
  }
  
};
