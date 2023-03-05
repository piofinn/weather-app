import { FC } from "react";
import { useCurrentWeather } from "../../api/api";
import { useUserData } from "../../contexts/userData";
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

  const temp = Math.round(data?.main.temp * 10) / 10;

  return (
    <article className="w-full flex-grow flex flex-col md:flex-row justify-evenly items-center">
      <div className="flex flex-col items-center gap-2">
        <p className="text-2xl text-slate-800">{data?.weather[0].main}</p>
        <p
          className={`${temp < 0 ? "text-blue-600" : "text-red-600"} text-8xl`}
        >
          {temp}℃
        </p>
        <p className="text-base text-slate-600">
          <span aria-label="Highest expected temperature">H</span>:{" "}
          {Math.round(data.main.temp_max)}℃{" "}
          <span aria-label="Lowest expected temperature">L</span>:{" "}
          {Math.round(data.main.temp_min)}℃
        </p>
      </div>
      <aside>
        <dl className="grid grid-cols-2 grid-rows-2 gap-6">
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
