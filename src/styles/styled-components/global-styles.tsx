import { createGlobalStyle } from "styled-components";
import { Theme } from "../theming/themes";

export interface IProps {
  theme: Theme;
}

export const GlobalStyles = createGlobalStyle`

  body {
    background: ${(props: IProps) => props.theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.50s linear;
    border: 2px solid ${(props: IProps) => props.theme.colors.border};
    margin:10px;
    min-height:calc(100vh - 24px);
  }

  a {
    color: ${({ theme }) => theme.colors.link.text};
    cursor: pointer;
  }

  svg{
    color: ${(props: IProps) => props.theme.colors.svg.color}
  }

  button {
    border: 0;
    display: inline-block;
    color: ${(props: IProps) => props.theme.colors.button.text}
    font-size: 14px;
    border-radius: 4px;
    cursor: pointer;
    border: 2px solid ${(props: IProps) => props.theme.colors.button.border};
    background: ${(props: IProps) => props.theme.colors.button.background};
  }

  button.btn {
    background-color: ${({ theme }) => theme.colors.button.background};
    color: ${({ theme }) => theme.colors.button.text};
  }
`;
