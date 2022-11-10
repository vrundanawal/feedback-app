import { fireEvent, render, screen } from "@testing-library/react";
import FeedbackItem from "../components/FeedbackItem";
import { FeedbackProvider } from "../context/FeedbackContext";
import "@testing-library/jest-dom";

const renderComponent = () => {
  const deleteFeedback = jest.fn();
  const feedback = {
    id: 2,
    rating: 9,
    text: "Using context Api Item 2",
  };
  return render(
    <FeedbackProvider deleteFeedback={deleteFeedback}>
      <FeedbackItem item={feedback} />
    </FeedbackProvider>
  );
};

it("should show the feedback item", async () => {
  renderComponent();
  expect(screen.queryByText("Using context Api Item 2")).toBeInTheDocument();
});

it("should have the delete button", async () => {
  //const { deleteFeedback, id } = renderComponent();
  renderComponent();
  const deleteBtn = screen.getByTestId("delete-list");
  fireEvent.click(deleteBtn);
  expect(deleteBtn).toBeInTheDocument();
  // expect(deleteFeedback).toBeCalledWith(id);
});
