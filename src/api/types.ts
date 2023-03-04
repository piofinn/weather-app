export type ReverseGeoResult = {
  name: string;
  local_names: Record<string, string>;
  lat: string;
  lon: string;
  country: string;
  state?: string;
};

export type CurrentWeatherResult = {
  coord: {
    lon: number;
    lat: number;
  };
  name: string;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  visibility: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
};
