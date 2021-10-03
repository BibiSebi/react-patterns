export type VoidFunc = () => void;
export type CounterOnChange = (count: number) => void;

export type ICounterCompound = {
  Label: React.FC;
  Increment: React.FC<IButton>;
  Decrement: React.FC<IButton>;
  Count: React.FC;
};

export type ICounterContext = {
  counter: number;
  increment: VoidFunc;
  decrement: VoidFunc;
};

export type IButton = {
  icon: string | JSX.Element;
};

export type ICounter = {
  children: React.ReactNode;
  onChange?: CounterOnChange;
};
