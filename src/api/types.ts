export type ReverseGeoResult = {
  name: string;
  local_names: Record<string, string>;
  lat: string;
  lon: string;
  country: string;
  state?: string;
};
