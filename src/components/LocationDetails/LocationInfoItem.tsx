import { FC } from "react";

export type LocationInfoItemProps = {
  title: string;
  description: string;
};

export const LocationInfoItem: FC<LocationInfoItemProps> = ({
  description,
  title,
}) => (
  <div className="align-left">
    <dt className="text-sm text-slate-600">{title}</dt>
    <dd className="text-xl text-slate-800">{description}</dd>
  </div>
);
