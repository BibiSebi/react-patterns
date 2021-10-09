import React from "react";
import { IFormFieldCompound } from "./types";

const FormField: React.FunctionComponent & IFormFieldCompound = ({
  children,
}) => {
  return <div className="form-field">{children}</div>;
};

const Label: React.FunctionComponent = ({ children }) => {
  return <label>{children}</label>;
};

const Error: React.FunctionComponent = ({ children }) => {
  return <span>{children}</span>;
};

FormField.Label = Label;
FormField.Error = Error;

export { FormField };
