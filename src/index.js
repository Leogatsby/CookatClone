import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./Router";
import Layout from "./layout/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Layout>
      <Router />
    </Layout>
  </React.StrictMode>
);
