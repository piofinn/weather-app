import { createBrowserRouter } from "react-router-dom";
import { RootTemplate } from "../templates/RootTemplate";
import { MainPage } from "./MainPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootTemplate />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
    ],
  },
]);
