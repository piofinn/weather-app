import { FC } from "react";
import { useCurrentWeather } from "../../api/api";
import "./location-card.scss";

export type LocationCardProps = {
  /**
   * The latitude of the location to show, as a number or a string
   */
  latitude: number | string;
  /**
   * The longitude of the location to show, as a number or a string
   */
  longitude: number | string;
  /**
   * An optional custom name for the location. If not provided, it will show the
   * location name received from the OpenWeather API, or the raw coordinates if no name is provided.
   */
  name?: string;
};

export const LocationCard: FC<LocationCardProps> = ({
  latitude,
  longitude,
  name,
}) => {
  const { data, isError, isLoading } = useCurrentWeather(
    String(latitude),
    String(longitude)
  );

  if (isError) {
    // TODO: Better error handling
    return <p>Something went wrong</p>;
  }

  return (
    <div className="wa-location-card">
      <h2 className="wa-location-card__location-name">
        {isLoading
          ? "Loading..."
          : name || data.name || `${latitude}, ${longitude}`}
      </h2>
      <p className="wa-location-card__temperature">
        {!isLoading && `${Math.round(data.main.temp * 10) / 10}℃`}
      </p>
    </div>
  );
};
