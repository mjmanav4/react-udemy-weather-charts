import axios from "axios";
const API_KEY = "b68979f2508d8d6af68f3f7e9feb345d";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = "FETCH_WEATHER";
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;

  const request = axios.get(url);
  console.log("Rewq in action ", request);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
