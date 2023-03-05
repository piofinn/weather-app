import { FC } from "react";

export type LocationInfoItemProps = {
  title: string;
  description: string;
};

export const LocationInfoItem: FC<LocationInfoItemProps> = ({
  description,
  title,
}) => (
  <div className="wa-info-item">
    <dt className="wa-info-item__title">{title}</dt>
    <dd className="wa-info-item__description">{description}</dd>
  </div>
);
