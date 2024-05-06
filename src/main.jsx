import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CustomApp from "./CustomApp.jsx";
import Users, { UsersWithImages } from "./Users.jsx";
import Friends from "./Friends.jsx";
import input from "./input.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Friends />
);
