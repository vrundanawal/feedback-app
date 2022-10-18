import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FeedbackData from "../data/FeedbackData";
import FeedbackItem from "./FeedbackItem";

//import userEvent from "@testing-library/user-event";

describe("<FeedbackItem/>", () => {
  it("should render the feedback List component", () => {
    expect(FeedbackItem).toBeTruthy();
  });

  it("should have delete button", () => {
    // const deleteBtn = screen.getByTestId("delete-list");
    // expect(deleteBtn).toBeInTheDocument();
    render(<FeedbackItem item={FeedbackData[0]} />);
    const deleteBtn = screen.getByTestId("delete-list");
    expect(deleteBtn).toBeInTheDocument();
    //expect(screen.queryByTestId("delete-list")).not.toBeInTheDocument();
  });
});
