import { useQuery } from "@tanstack/react-query";
import { UserData } from "../contexts/userData";
import { getCurrentWeather, getLocationName } from "./server";

export const useLocationName = (lat: string, lon: string, limit?: number) =>
  useQuery({
    queryKey: ["location", lat, lon, limit],
    queryFn: () => getLocationName(lat, lon, limit),
    staleTime: 60000, // Only fetch new data every minute
  });

export const useCurrentWeather = (
  lat: string,
  lon: string,
  unitType?: UserData["unitType"]
) =>
  useQuery({
    queryKey: ["weather", lat, lon, unitType],
    queryFn: () => getCurrentWeather(lat, lon, unitType),
    staleTime: 60000, // Only fetch new data every minute
  });
