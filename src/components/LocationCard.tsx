import { FC } from "react";
import { Link } from "react-router-dom";
import { useCurrentWeather } from "../api/api";
import { useUserData } from "../contexts/userData";

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
  /**
   * Signifies that this is the user's current location
   * @default false
   */
  currentLocation?: boolean;
};

export const LocationCard: FC<LocationCardProps> = ({
  latitude,
  longitude,
  name,
  currentLocation = false,
}) => {
  const { unitType } = useUserData();
  const { data, isError, isLoading } = useCurrentWeather(
    String(latitude),
    String(longitude),
    unitType
  );

  if (isError && !data) {
    return (
      <p>
        Sorry, but we could not get the weather data for this location! Try
        refreshing the page, or come back later.
      </p>
    );
    // TODO: Better error handling for stale data/failed background fetch
  }

  const temp = !isLoading && Math.round(data.main.temp * 10) / 10;

  return (
    <Link
      to={`${latitude},${longitude}`}
      className="min-w-[250px] flex flex-row flex-grow justify-between items-center rounded drop-shadow-sm py-6 px-4 bg-slate-50 text-lg hover:bg-white hover:drop-shadow-xl transition"
    >
      <span className="text-slate-600 flex items-center">
        {currentLocation && (
          <span className="material-symbols-rounded text-[18px] mr-2">
            {"\ue55c"}
          </span>
        )}
        {/* Display stale data, or loading indicator if no data yet */}
        {isLoading && !data
          ? "Loading..."
          : name || data.name || `${latitude}, ${longitude}`}
      </span>
      <span
        className={`${temp < 0 ? "text-blue-600" : "text-red-600"}`}
      >{`${temp}℃`}</span>
    </Link>
  );
};
