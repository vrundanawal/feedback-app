import "@testing-library/jest-dom";

import FeedbackList from "./FeedbackList";
//import userEvent from "@testing-library/user-event";
import { shallow } from "enzyme";
import FeedbackData from "../data/FeedbackData";
import { render, screen } from "@testing-library/react";

describe("<FeedbackList/>", () => {
  it("should render the feedback List component", () => {
    expect(FeedbackList).toBeTruthy();
  });
});

test("should test TodoLists component with default state of array", () => {
  const wrapper = shallow(<FeedbackList feedback={FeedbackData} />);
  expect(wrapper).toMatchSnapshot();
});

test("It should show the message if there is no Feedback data available", () => {
  render(<FeedbackList feedback={[]} />);
  const message = screen.getByTestId("error-message");
  expect(message).toBeInTheDocument();
});

test("It will return the jsx if length is 0", () => {
  render(<FeedbackList feedback={FeedbackData.length === 0} />);
  const message = screen.getByTestId("error-message");
  expect(message).toBeInTheDocument();
});
