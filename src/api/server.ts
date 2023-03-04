const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

async function makeSimpleFetchRequest(
  input: RequestInfo | URL,
  init?: RequestInit
) {
  const response = await fetch(input, init);

  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.status}`);
  }

  return response.json();
}

export const getLocationName = async (lat: string, lon: string, limit = 1) => {
  makeSimpleFetchRequest(
    `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=${limit}&appid=${API_KEY}`
  );
};

export const getCurrentWeather = async (lat: string, lon: string) => {
  makeSimpleFetchRequest(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );
};
