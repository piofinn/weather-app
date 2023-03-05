import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { LocationCard } from "./components/LocationCard/LocationCard";
import "./App.css";
import { LocationDetails } from "./components/LocationDetails/LocationDetails";
import { UserDataProvider, useUserData } from "./contexts/userData";

function App() {
  const [userLocation, setUserLocation] = useState<GeolocationPosition>();
  const queryClient = new QueryClient();
  const { locations } = useUserData();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(setUserLocation);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <UserDataProvider>
        <header>Dashboard</header>
        <main>
          {userLocation ? (
            <>
              <LocationCard
                latitude={userLocation.coords.latitude}
                longitude={userLocation.coords.longitude}
              />
              <LocationDetails
                latitude={userLocation.coords.latitude}
                longitude={userLocation.coords.longitude}
              />
            </>
          ) : (
            /* TODO: Better presentation of loading */
            <p>Getting your location...</p>
          )}
          {locations.map((location) => (
            <LocationCard key={location.latitude} {...location} />
          ))}
        </main>
      </UserDataProvider>
    </QueryClientProvider>
  );
}

export default App;
