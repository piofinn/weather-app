import { FC } from "react";
import { Outlet } from "react-router-dom";

import "./root-template.scss";

export const RootTemplate: FC = () => (
  <div className="wa-app">
    <header className="wa-app__header">Dashboard</header>
    <main className="wa-app__main">
      <Outlet />
    </main>
  </div>
);
