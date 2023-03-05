import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const RootTemplate: FC = () => (
  <div className="min-h-screen width-full min-w-[100vw] flex flex-col bg-slate-200">
    <Header />
    <main className="flex flex-col items-center flex-grow px-8 py-4">
      <Outlet />
    </main>
  </div>
);
