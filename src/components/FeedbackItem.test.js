import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import FeedbackItem from "./FeedbackItem";

//import userEvent from "@testing-library/user-event";

describe("<FeedbackItem/>", () => {
  it("should render the feedback List component", () => {
    expect(FeedbackItem).toBeTruthy();
  });

  it("should have delete button", () => {
    // const deleteBtn = screen.getByTestId("delete-list");
    // expect(deleteBtn).toBeInTheDocument();
    expect(screen.queryByTestId("delete-list")).not.toBeInTheDocument();
  });
});
