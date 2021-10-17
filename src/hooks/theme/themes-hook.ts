import { useEffect, useState } from "react";
import { Themes } from "../../styles/theming/themes";
import { getFromLS, setToLS } from "../../utils/local-storage";

export const useTheme = () => {
  const themes: Themes = getFromLS("all-themes");
  const [theme, setTheme] = useState(themes?.light);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode: any) => {
    setToLS("theme", mode);
    setTheme(mode);
  };

  useEffect(() => {
    const localTheme = getFromLS("theme");
    localTheme ? setTheme(localTheme) : setTheme(themes.light);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode };
};
