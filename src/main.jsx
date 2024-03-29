import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Root from "./routes/root";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import Classes, {classLoader} from "./routes/class";
import Feats, {featLoader} from "./routes/feat";
import ChosenClass, { chosenClassLoader } from "./routes/chosen-class";
import ChosenFeat, {chosenFeatLoader} from "./routes/chosen-feat";
import Home from "./routes/home";
import ChosenClassLevel, { chosenClassLevelLoader } from "./routes/class-level";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
    { index: true, element: <Home/> },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "class",
        element: <Classes />,
        loader: classLoader,
        children: [
          {
            path: ":index",
            element: <ChosenClass />,
            loader: chosenClassLoader,
            // children: [
            //   {
            //     element: <ChosenClassLevel />,
            //     loader: chosenClassLevelLoader
            //   }
            // ]
          },
        ],
      },
      {
        path: "feat",
        element: <Feats />,
        loader: featLoader,
      },
      {
        path: "feat/:index",
        element: <ChosenFeat />,
        loader: chosenFeatLoader,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)``;
