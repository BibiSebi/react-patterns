import React, { ChangeEvent, useContext, useState } from "react";
import "./../../../styles/components/form-field/form-field.scss";
import { IFormFieldCompound } from "./types";

const FormFieldContext = React.createContext<any>(false);

const FormField: React.FunctionComponent & IFormFieldCompound = ({
  children,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isShrinked, setIsShrinked] = useState(false);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };
  return (
    <FormFieldContext.Provider
      value={{ isFocused, isShrinked, onFocus, onBlur, setIsShrinked }}
    >
      <div className="form-field">{children}</div>
    </FormFieldContext.Provider>
  );
};

const Input: React.FunctionComponent = () => {
  const { onFocus, onBlur, setIsShrinked } = useContext(FormFieldContext);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length !== 0) {
      setIsShrinked(true);
    } else {
      setIsShrinked(false);
    }
  };

  return (
    <div className="form-field__input">
      <input
        onChange={(e) => handleOnChange(e)}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};
const Label: React.FunctionComponent = ({ children }) => {
  const { isFocused, isShrinked } = useContext(FormFieldContext);

  const getClassName = (isFocused: boolean, isShrinked: boolean): string => {
    if (isFocused) {
      return "form-field__label form-field__label--shrink form-field__label--focused";
    } else if (!isFocused && isShrinked) {
      return "form-field__label form-field__label--shrink";
    }
    return "form-field__label";
  };

  return (
    <label className={getClassName(isFocused, isShrinked)}>{children}</label>
  );
};

// TODO: enhance validation process
const Error: React.FunctionComponent = ({ children }) => {
  return <span className="form-field__error">{children}</span>;
};

FormField.Label = Label;
FormField.Input = Input;
FormField.Error = Error;

export { FormField };
