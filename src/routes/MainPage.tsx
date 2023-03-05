import { FC, useEffect, useState } from "react";
import { LocationCard } from "../components/LocationCard/LocationCard";
import { useUserData } from "../contexts/userData";

export const MainPage: FC = () => {
  const [userLocation, setUserLocation] = useState<GeolocationPosition>();
  const { locations } = useUserData();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(setUserLocation);
    }
  }, []);

  return (
    <>
      {userLocation ? (
        <LocationCard
          latitude={userLocation.coords.latitude}
          longitude={userLocation.coords.longitude}
        />
      ) : (
        /* TODO: Better presentation of loading */
        <p>Getting your location...</p>
      )}
      {locations.map((location) => (
        <LocationCard key={location.latitude} {...location} />
      ))}
    </>
  );
};
