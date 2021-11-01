import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Counter } from "../components/compound-components/counter/Counter";
import { FormField } from "../components/compound-components/form-field/FormField";

const CompoundComponents = () => {
  const handleChangeCounter = (count: number) => {
    console.log("count", count);
  };

  return (
    <>
      <h2>Counter Example</h2>

      <Counter onChange={handleChangeCounter}>
        <Counter.Decrement icon={<FiMinus />}></Counter.Decrement>
        <Counter.Label>Counter</Counter.Label>
        <Counter.Count></Counter.Count>
        <Counter.Increment icon={<FiPlus />}></Counter.Increment>
      </Counter>

      <h2>Formfield Example</h2>
      <FormField>
        <FormField.Label>First Name</FormField.Label>
        <FormField.Input />
        <FormField.Error>
          First Name is <strong> requiered</strong>
        </FormField.Error>
      </FormField>

      <FormField>
        <FormField.Label>Last Name</FormField.Label>
        <FormField.Input />
        <FormField.Error>
          First Name is <strong>requiered</strong>
        </FormField.Error>
      </FormField>
    </>
  );
};

export default CompoundComponents;
