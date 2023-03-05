import { FC, useEffect, useState } from "react";
import { LocationCard } from "../components/LocationCard";
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
    <div className="flex flex-row flex-wrap gap-3 mt-8">
      {userLocation ? (
        <LocationCard
          currentLocation
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
    </div>
  );
};
