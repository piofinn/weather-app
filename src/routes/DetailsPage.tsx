import { FC } from "react";
import { useParams } from "react-router-dom";
import { LocationDetails } from "../components/LocationDetails/LocationDetails";

export const DetailsPage: FC = () => {
  const { location } = useParams();

  if (!location) {
    throw new Error("This really should not happen");
  }

  const [latitude, longitude] = location?.split(",").map(parseFloat);

  if (isNaN(latitude) || isNaN(longitude)) {
    throw new Error("The provided coordinates have an error in them");
  }

  return <LocationDetails latitude={latitude} longitude={longitude} />;
};
