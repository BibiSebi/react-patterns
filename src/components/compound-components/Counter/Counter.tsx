import React, { useContext, useEffect, useState } from "react";
import { Button, Container, CounterLabel } from "./CounterGenerated";
import { IButton, ICounter, ICounterCompound, ICounterContext } from "./types";

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
  return <span>{children}</span>;
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
