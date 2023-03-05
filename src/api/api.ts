import { useQuery } from "@tanstack/react-query";
import { getCurrentWeather, getLocationName } from "./server";

export const useLocationName = (lat: string, lon: string, limit?: number) =>
  useQuery({
    queryKey: ["location", lat, lon, limit],
    queryFn: () => getLocationName(lat, lon, limit),
    staleTime: 60000, // Only fetch new data every minute
  });

export const useCurrentWeather = (lat: string, lon: string) =>
  useQuery({
    queryKey: ["weather", lat, lon],
    queryFn: () => getCurrentWeather(lat, lon),
    staleTime: 60000, // Only fetch new data every minute
  });
