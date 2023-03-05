import { FC } from "react";
import { useCurrentWeather } from "../../api/api";
import "./location-details.scss";

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
  const { data, isError, isLoading } = useCurrentWeather(
    String(latitude),
    String(longitude)
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

  const testDate = new Date(data.sys.sunrise);
  testDate.setSeconds(testDate.getSeconds() - data.timezone);
  console.log(testDate.toLocaleTimeString());

  return (
    <article className="wa-location-details">
      <div className="wa-location-temperature">
        <p className="wa-location-temperature__condition">
          {data?.weather[0].main}
        </p>
        <p className="wa-location-temperature__current">
          {Math.round(data?.main.temp * 10) / 10}℃
        </p>
        <p>
          <span aria-label="Highest expected temperature">H</span>:{" "}
          {Math.round(data.main.temp_max)}℃{" "}
          <span aria-label="Lowest expected temperature">L</span>:{" "}
          {Math.round(data.main.temp_min)}℃
        </p>
      </div>
      <aside>
        <dl className="wa-location-info">
          <div className="wa-info-item">
            <dt className="wa-info-item__title">Sunrise</dt>
            <dd className="wa-info-item__description">
              {new Date(data.sys.sunrise * 1000).toLocaleTimeString(undefined, {
                timeStyle: "short",
              })}
            </dd>
          </div>
          <div className="wa-info-item">
            <dt className="wa-info-item__title">Sunset</dt>
            <dd className="wa-info-item__description">
              {new Date(data.sys.sunset * 1000).toLocaleTimeString(undefined, {
                timeStyle: "short",
              })}
            </dd>
          </div>
          <div className="wa-info-item">
            <dt className="wa-info-item__title">Humidity</dt>
            <dd className="wa-info-item__description">
              {data.main.humidity} %
            </dd>
          </div>
          <div className="wa-info-item">
            <dt className="wa-info-item__title">Visibility</dt>
            <dd className="wa-info-item__description">
              {data.visibility / 1000} km
            </dd>
          </div>
        </dl>
      </aside>
    </article>
  );
};
