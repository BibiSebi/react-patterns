import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../src/hooks/theme/themes-hook";
import "./App.scss";
import AsyncAwait from "./pages/AsyncAwait";
import Home from "./pages/Home";
import { GlobalStyles } from "./styles/styled-components/global-styles";

function App() {
  const { theme, themeLoaded } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <h1>React Patterns</h1>
          <Router>
            <nav className="main-nav">
              <ol className="main-nav__list">
                <li className="main-nav__list-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="main-nav__list-item">
                  <Link to="/async">AsyncAwait</Link>
                </li>
              </ol>
            </nav>

            <Switch>
              <Route path="/async">
                <AsyncAwait />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
