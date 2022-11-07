import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { FeedbackProvider } from "../context/FeedbackContext";
import FeedbackStats from "../components/FeedbackStats";

describe("<FeedbackStats/>", () => {
  it("should render the feedback status component", () => {
    render(
      <FeedbackProvider>
        <FeedbackStats />
      </FeedbackProvider>
    );
    expect(FeedbackStats).toBeTruthy();
  });

  it("should show the average rating", () => {
    render(
      <FeedbackProvider>
        <FeedbackStats />
      </FeedbackProvider>
    );
    const average = screen.getByTestId("average-rating");
    expect(average).toBeInTheDocument();
  });

  it("should update the reviews", () => {
    render(
      <FeedbackProvider>
        <FeedbackStats />
      </FeedbackProvider>
    );
    const feedBackReviews = screen.getByTestId("feedback-reviews");
    expect(feedBackReviews).toBeInTheDocument();
  });
});
