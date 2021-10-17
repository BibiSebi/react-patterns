import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../src/hooks/theme/themes-hook";
import "./App.scss";
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
          <div className="App">
            <h1>React Patterns</h1>
            <Home></Home>
          </div>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
