import "@testing-library/jest-dom";

import FeedbackList from "./FeedbackList";
//import userEvent from "@testing-library/user-event";
import { shallow } from "enzyme";
import FeedbackData from "../data/FeedbackData";

describe("<FeedbackList/>", () => {
  it("should render the feedback List component", () => {
    expect(FeedbackList).toBeTruthy();
  });
});

test("should test TodoLists component with default state of array", () => {
  const wrapper = shallow(<FeedbackList feedback={FeedbackData} />);
  expect(wrapper).toMatchSnapshot();
});
