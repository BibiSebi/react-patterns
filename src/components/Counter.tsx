import React, { useContext, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import styled from "styled-components";

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

export interface ICounter {
  Label: React.FC;
  Increment: React.FC;
  Decrement: React.FC;
  ButtonWrapper: React.FC;
}

export interface ICounterContext {
  counter: number;
  increment: IncrDecrFunc;
  decrement: IncrDecrFunc;
}

const CounterContext = React.createContext<ICounterContext>({
  counter: 0,
  increment: () => {},
  decrement: () => {},
});

const Counter: React.FC & ICounter = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  return (
    <CounterContext.Provider value={{ counter, increment, decrement }}>
      <Container>{children}</Container>
    </CounterContext.Provider>
  );
};

const Label: React.FC = ({ children }) => {
  const { counter } = useContext(CounterContext);
  return (
    <CounterLabel>
      {children} : {counter}
    </CounterLabel>
  );
};

const Increment: React.FC = () => {
  const { increment } = useContext(CounterContext);

  return (
    <Button onClick={increment}>
      <FiPlus />
    </Button>
  );
};

const Decrement: React.FC = () => {
  const { decrement } = useContext(CounterContext);
  return (
    <Button onClick={decrement}>
      {" "}
      <FiMinus />
    </Button>
  );
};

const ButtonWrapper: React.FC = ({ children }) => {
  return <ButtonContainer>{children}</ButtonContainer>;
};

Counter.Label = Label;
Counter.Decrement = Decrement;
Counter.Increment = Increment;
Counter.ButtonWrapper = ButtonWrapper;

export { Counter };
