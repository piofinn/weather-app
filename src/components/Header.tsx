import { FC } from "react";
import { Link } from "react-router-dom";

export const Header: FC = () => (
  <header className="flex flex-row bg-slate-800 py-8 px-4">
    <Link className="" to="/">
      ←
    </Link>
    <h1 className="flex-grow text-center text-xl text-slate-300 font-bold">
      Dashboard
    </h1>
  </header>
);
