import "@testing-library/jest-dom";

//import userEvent from "@testing-library/user-event";

import { render, screen } from "@testing-library/react";

import FeedbackList from "../components/FeedbackList";
import { FeedbackProvider } from "../context/FeedbackContext";

describe("<FeedbackList/>", () => {
  it("should render the feedback List component", () => {
    expect(FeedbackList).toBeTruthy();
  });

  it("should show the error message if there is no feedback data available", () => {
    render(
      <FeedbackProvider>
        <FeedbackList />
      </FeedbackProvider>
    );
    const message = screen.getByTestId("error-message");
    expect(message).toBeInTheDocument();
  });

  it("show the error message when feedback is empty", () => {
    const emptyArray = [];
    render(
      <FeedbackProvider>
        <FeedbackList feedback={emptyArray} />
      </FeedbackProvider>
    );
    const message = screen.getByTestId("error-message");
    expect(message).toBeInTheDocument();
    expect(screen.getByText(/No FeedBack is available/i)).toBeTruthy();
  });
});
