import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { LocationCard } from "./components/LocationCard/LocationCard";
import "./App.css";
import { LocationDetails } from "./components/LocationDetails/LocationDetails";

function App() {
  const [userLocation, setUserLocation] = useState<GeolocationPosition>();
  const queryClient = new QueryClient();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(setUserLocation);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
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
      </main>
    </QueryClientProvider>
  );
}

export default App;
