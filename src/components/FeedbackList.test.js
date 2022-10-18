import "@testing-library/jest-dom";

import FeedbackList from "./FeedbackList";
//import userEvent from "@testing-library/user-event";

describe("<FeedbackList/>", () => {
  it("should render the feedback List component", () => {
    expect(FeedbackList).toBeTruthy();
  });
});
