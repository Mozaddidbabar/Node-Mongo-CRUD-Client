import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Users from "./components/Users/Users.jsx";
import UpdateUsers from "./components/UpdateUsers/UpdateUsers.jsx";
import AddUser from "./components/AddUser/AddUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: () => fetch("http://localhost:5000/users"),
  },
  {
    path: "/update/:id",
    element: <UpdateUsers></UpdateUsers>,
    loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`),
  },
  {
    path: "/addUser",
    element: <AddUser></AddUser>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
