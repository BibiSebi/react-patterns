import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

//TODO: replace generated comps and interfaces and types
export const Container = styled.div`
  color: #224870;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  flex: 1;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`;

export const CounterLabel = styled.span`
  font-size: 32px;
`;

export const Button = styled.button`
  display: flex;
  background: white;
  color: #d17a22;
  border: 2px solid #224870;
  align-items: center;
  justify-content: center;
  padding: 5px;
  flex: 1;
  margin: 1px;
`;

export type IncrDecrFunc = () => void;

export interface ICounterCompound {
  Label: React.FC;
  Increment: React.FC<IButton>;
  Decrement: React.FC<IButton>;
  Count: React.FC;
}

export interface ICounterContext {
  counter: number;
  increment: IncrDecrFunc;
  decrement: IncrDecrFunc;
}

export interface IButton {
  icon: string | JSX.Element;
}

// TODO: typing for function
export interface ICounter {
  children: React.ReactNode;
  onChange?: (count: number) => void;
}

const CounterContext = React.createContext<ICounterContext>({
  counter: 0,
  increment: () => {},
  decrement: () => {},
});

const Counter: React.FC<ICounter> & ICounterCompound = ({
  children,
  onChange = () => {},
}) => {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  useEffect(() => {
    onChange(counter);
  }, [counter]);

  return (
    <CounterContext.Provider value={{ counter, increment, decrement }}>
      <Container>{children}</Container>
    </CounterContext.Provider>
  );
};

const Label: React.FC = ({ children }) => {
  return <div>{children}</div>;
};

const Count: React.FC = () => {
  const { counter } = useContext(CounterContext);

  return <CounterLabel>{counter}</CounterLabel>;
};

const Increment: React.FC<IButton> = ({ icon }) => {
  const { increment } = useContext(CounterContext);

  return <Button onClick={increment}>{icon}</Button>;
};

const Decrement: React.FC<IButton> = ({ icon }) => {
  const { decrement } = useContext(CounterContext);
  return <Button onClick={decrement}>{icon}</Button>;
};

Counter.Label = Label;
Counter.Count = Count;
Counter.Decrement = Decrement;
Counter.Increment = Increment;

export { Counter };
