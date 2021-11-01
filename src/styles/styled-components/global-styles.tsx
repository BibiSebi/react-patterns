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
    padding:10px;
  }

  a {
    color: ${({ theme }) => theme.colors.link.text};
    cursor: pointer;
  }

  nav.main-nav{
    display:inline-flex;
    border:${(props: IProps) => props.theme.colors.text} solid 2px;
    ol{
      padding:0;
      margin:0;
      li{
        margin:2px; 
        padding:2px;
        position:relative;
        &:not(:last-of-type){
          &:before{
            position:absolute;
            height:80%;
            width:2px;
            content:"";
            right:-3px;
            background-color:${(props: IProps) => props.theme.colors.text} ;
          }
           
        }
        &:hover{
          background:red;
        }
      }
    }

  }

  svg{
    color: ${(props: IProps) => props.theme.colors.svg.color}
  }

  input{
    color:${(props: IProps) => props.theme.colors.text};
    outline: none;
    border: ${(props: IProps) => props.theme.colors.text} solid 0.125rem;
    border-radius: 0.188rem;
    &:focus{
      border: ${(props: IProps) =>
        props.theme.colors.input.outline} solid 0.125rem;
    }
  
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
