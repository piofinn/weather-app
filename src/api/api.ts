import { useQuery } from "@tanstack/react-query";
import { getCurrentWeather, getLocationName } from "./server";

export const useLocationName = (lat: string, lon: string, limit?: number) =>
  useQuery({
    queryKey: ["location", lat, lon, limit],
    queryFn: async () => getLocationName(lat, lon, limit),
  });

export const useCurrentWeather = (lat: string, lon: string) =>
  useQuery({
    queryKey: ["weather", lat, lon],
    queryFn: async () => getCurrentWeather(lat, lon),
  });
