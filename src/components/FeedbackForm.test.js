//import { screen, render } from "@testing-library/react";
//import FeedbackForm from "./FeedbackForm";

// describe("FeedbackForm", () => {
//   it("should render FeedbackForm component", () => {
//     expect(FeedbackForm).toBeTruthy();
//   });

//   it("should display the the default text inside the input", async () => {
//     const inputElement = await screen.findByRole("input", {
//       value: "welcome",
//     });
//     render(<FeedbackForm {...inputElement} />);

//     const testingBtn = screen.getByRole("button");
//     expect(testingBtn).toBeDisabled();
//   });
//   it('should show the error message if the input is lees than 10 character', () => {
//     render(<FeedbackForm />);
//     const inputText = 'Welcome'
//   const testingBtn = screen.getByRole("button")
//   expect(testingBtn).toBeDisabled();
//   })
// });

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
//import userEvent from "@testing-library/user-event";

import FeedbackForm from "./FeedbackForm";

describe("<FeedbackForm />", () => {
  it("render text input", () => {
    render(<FeedbackForm />);

    const inputEl = screen.getByTestId("text-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
  });

  test("Send button should have type Submit and it should be disable by default", () => {
    const { getByRole } = render(<FeedbackForm />);
    const submitBtn = getByRole("button", { name: "Send" });
    expect(submitBtn).toHaveAttribute("type", "submit");
    expect(submitBtn).toBeDisabled();
  });

  it("should render the component onto the screen", () => {
    render(<FeedbackForm />);
    expect(screen.getByTestId("text-input")).toBeInTheDocument();
    expect(screen.getByTestId("add-word-button")).toBeInTheDocument();
  });
});
