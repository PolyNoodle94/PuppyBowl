import React from "react";
import ReactDOM from "react-dom/client";
import { Main } from "./components";
import { PlayerStats } from "./components";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Main />}>
        {" "}
      </Route>
      <Route path=":id" element={<PlayerStats />}>
        {" "}
      </Route>
    </>
  )
);

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

root.render(<RouterProvider router={router} />);
