import { createContext, FC, ReactNode, useContext, useState } from "react";

export type LocationInfo = {
  latitude: number;
  longitude: number;
  name?: string;
};

export type UserData = {
  unitType: "metric" | "imperial";
  locations: LocationInfo[];
};

const DEFAULT_LOCATIONS: LocationInfo[] = [
  {
    latitude: 52.5244,
    longitude: 13.4105,
    name: "Berlin",
  },
  {
    latitude: 51.5085,
    longitude: -0.1257,
    name: "London",
  },
];

const userDataContext = createContext<UserData>({
  unitType: "metric",
  locations: DEFAULT_LOCATIONS,
});

export const useUserData = () => useContext(userDataContext);

export const UserDataProvider: FC<{ children?: ReactNode }> = ({
  children,
}) => {
  const [unitType, setUnitType] = useState<UserData["unitType"]>("metric");
  const [locations, setLocations] =
    useState<UserData["locations"]>(DEFAULT_LOCATIONS);

  return (
    <userDataContext.Provider value={{ unitType, locations }}>
      {children}
    </userDataContext.Provider>
  );
};
