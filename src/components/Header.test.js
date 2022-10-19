import { render } from "@testing-library/react";
import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

it("renders", () => {
  const { asFragment } = render(<Header text="Feedback UI" />);
  expect(asFragment()).toMatchSnapshot();
});

test("should test Header component", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
