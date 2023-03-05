import { FC } from "react";
import { useCurrentWeather } from "../../api/api";
import { useUserData } from "../../contexts/userData";
import "./location-details.scss";
import { LocationInfoItem } from "./LocationInfoItem";
import { getLocalTime } from "./utils";

export type LocationDetailsProps = {
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

export const LocationDetails: FC<LocationDetailsProps> = ({
  latitude,
  longitude,
  name,
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

  if (isLoading && !data) {
    // TODO: Better loading state
    return <p>Loading weather data...</p>;
  }

  return (
    <article className="wa-location-details">
      <div className="wa-location-temperature">
        <p className="wa-location-temperature__condition">
          {data?.weather[0].main}
        </p>
        <p className="wa-location-temperature__current">
          {Math.round(data?.main.temp * 10) / 10}℃
        </p>
        <p className="wa-location-temperature__range">
          <span aria-label="Highest expected temperature">H</span>:{" "}
          {Math.round(data.main.temp_max)}℃{" "}
          <span aria-label="Lowest expected temperature">L</span>:{" "}
          {Math.round(data.main.temp_min)}℃
        </p>
      </div>
      <aside>
        <dl className="wa-location-info">
          <LocationInfoItem
            title="Sunrise"
            description={getLocalTime(data.sys.sunrise * 1000)}
          />
          <LocationInfoItem
            title="Sunset"
            description={getLocalTime(data.sys.sunset * 1000)}
          />
          <LocationInfoItem
            title="Humidity"
            description={`${data.main.humidity} %`}
          />
          <LocationInfoItem
            title="Visibility"
            description={`${data.visibility / 1000} km`}
          />
        </dl>
      </aside>
    </article>
  );
};
