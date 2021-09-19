import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Counter } from "../components/Counter";

const CompoundComponents = () => {
  const handleChangeCounter = (count: number) => {
    console.log("count", count);
  };

  return (
    <>
      <Counter onChange={handleChangeCounter}>
        <Counter.Decrement icon={<FiMinus />}></Counter.Decrement>
        <Counter.Label>Counter</Counter.Label>
        <Counter.Count></Counter.Count>
        <Counter.Increment icon={<FiPlus />}></Counter.Increment>
      </Counter>
    </>
  );
};

export default CompoundComponents;
