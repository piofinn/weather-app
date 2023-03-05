import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

export const Header: FC = () => {
  const { pathname } = useLocation();

  return (
    <header className="flex flex-row items-center bg-slate-800 py-8 px-4 text-slate-300">
      {pathname !== "/" && (
        <Link
          title="Back to dashboard"
          aria-label="Back to dashboard"
          className="w-10 material-symbols-rounded text-[24px] hover:text-white"
          to="/"
        >
          {"\ue5e0"}
        </Link>
      )}
      <h1 className="flex-grow text-center text-xl text-slate-300 font-bold">
        Dashboard
      </h1>
      <button
        // TODO: Actually show settings
        title="Show settings"
        aria-label="Show settings"
        className="w-10 h-10 material-symbols-rounded text-[24px] hover:text-white"
      >
        {"\ue8b8"}
      </button>
    </header>
  );
};
