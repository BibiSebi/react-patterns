import { shallow } from "enzyme";
import React from "react";
import App from "./App";

describe("<App />", () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });
  test("It should mount", () => {
    expect(component.length).toBe(1);
  });
});
