import * as React from "react";
import {
  createBrowserRouter
} from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { PokemonDetail } from "../pages/PokemonDetail/PokemonDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/detail",
    element: <PokemonDetail />,
  },
]);