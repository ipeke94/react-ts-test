import "./styles/style.scss";
import { Link } from "react-router-dom";
import { routes } from "./constants/router";
import * as React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const routeComponents = routes.map(({ path, Component, name }, index: number) => (
    <Route key={index} path={path} element={<Component key={index} />} />));

  const listItems = routes.map(({ path, name }, index) => (
    <li key={index}>
      <Link to={`${path}`}>{name}</Link>
    </li>
  ));

  return (
    <div className="app">
      <h1 className="component-list-name">^_^ Component List 🤖 ^_^</h1>
      <ul>{listItems}</ul>
      <h2 className="show-text">Let the show begin..! 🎉</h2>
      <main>
        <Routes>{routeComponents}</Routes>
      </main>
    </div>
  );
};

export default App;
