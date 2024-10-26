// utils/weather.ts
import axios from "axios";
import { NextRequest } from "next/server";

export const dynamic = "force-static";

const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function POST(request: NextRequest) {
  const { location } = await request.json(); 

  if (!location) {
    return new Response("Location is required", { status: 400 });
  }

  try {
    const { data } = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: location,
        appid: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
        units: "metric",
      },
    });
    return Response.json({ data });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data);
      return new Response(error.response?.data.message || "An error occurred", {
        status: 500,
      });
    } else {
      return new Response("An unexpected error occurred.", { status: 500 });
    }
  }
}
