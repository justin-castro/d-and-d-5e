import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Root from "./routes/root";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import Classes, {classLoader} from "./routes/class";
import Feats from "./routes/feat";
import ChosenClass, {chosenClassLoader} from "./routes/chosen-class";
import Home from "./routes/home";
import ChosenClassLevel, { chosenClassLevelLoader } from "./routes/class-level";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    index: <Home />,
    children: [
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
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)``;
