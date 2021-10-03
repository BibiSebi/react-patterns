export type IncrDecrFunc = () => void;

export type ICounterCompound = {
  Label: React.FC;
  Increment: React.FC<IButton>;
  Decrement: React.FC<IButton>;
  Count: React.FC;
};

export type ICounterContext = {
  counter: number;
  increment: IncrDecrFunc;
  decrement: IncrDecrFunc;
};

export type IButton = {
  icon: string | JSX.Element;
};

// TODO: typing for function
export type ICounter = {
  children: React.ReactNode;
  onChange?: (count: number) => void;
};
