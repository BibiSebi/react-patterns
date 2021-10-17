import baseStyled, { ThemedStyledInterface } from "styled-components";

//TODO: black theming and switching

export const themes = {
  light: {
    id: "th_001",
    name: "Light",
    colors: {
      body: "white",
      text: "#3d5a80",
      border: "#3d5a80",
      button: {
        text: "#3d5a80",
        background: "white",
        border: "#3d5a80",
      },
      link: {
        text: "#3d5a80",
      },
      svg: {
        color: "#3d5a80",
      },
    },
  },
  dark: {
    id: "th_002",
  },
};

export type Themes = typeof themes;
export type Theme = typeof themes.light;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
