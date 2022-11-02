import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FeedbackStats from "./FeedbackStats";

describe("<FeedbackStats />", () => {
  it("should render FeedbackStats component", () => {
    expect(FeedbackStats).toBeTruthy();
  });

  test("To show the average rating", () => {
    //const feedback = FeedbackData;
    render(<FeedbackStats />);
    const average = screen.getByTestId("average-rating");
    expect(average).toBeInTheDocument();
  });

  test("it should update the reviews", () => {
    render(<FeedbackStats />);
    const feedBackReviews = screen.getByTestId("feedback-reviews");
    expect(feedBackReviews).toBeInTheDocument();
  });

  // test("it should update the reviews", () => {
  //   render(<FeedbackStats feedback={FeedbackData} />);
  //   expect(screen.getByText("Reviews")).toBeInTheDocument();
  // });
});
