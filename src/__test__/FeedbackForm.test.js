import { cleanup, fireEvent, render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import FeedbackForm from "../components/FeedbackForm";
import { FeedbackProvider } from "../context/FeedbackContext";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

// describe("Feedback Form component", () => {
//   render(<FeedbackForm />, {
//     wrapper: FeedbackProvider
//   });
//   //find the h2 element in form
// //   it("find the h2 element in form", () => {
// //     const element = screen.getByText(
// //       /How would you rate your service with us?/i
// //     );
// //     expect(element).toHaveTextContent(
// //       "How would you rate your service with us?"
// //     );
// //   });
// const mockData = jest.fn()

// });

afterEach(cleanup);
// const addFeedback = jest.fn();
// const feedback = [];
// const newFeedBack = {
//   id: 12,
//   rating: 5,
//   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
// };

describe("Should render the form component", () => {
  it("render the form with selected rating value", () => {
    render(
      <FeedbackProvider>
        <FeedbackForm />
      </FeedbackProvider>
    );
    const selectInput = screen.getByTestId("select-test");
    fireEvent.change(selectInput, { target: { value: "1" } });
    expect(selectInput.value).toBe("1");
  });

  it("should have an h2 element text", () => {
    render(
      <FeedbackProvider>
        <FeedbackForm />
      </FeedbackProvider>
    );
    const h2Element = screen.getByText(
      /How would you rate your service with us?/i
    );
    expect(h2Element).toBeInTheDocument();
  });

  it("should be able to type name input field", () => {
    const { getByTestId } = render(
      <FeedbackProvider>
        <FeedbackForm />
      </FeedbackProvider>
    );
    fireEvent.change(getByTestId("text-input"), {
      target: { value: "this is a test case 1" },
    });
    expect(getByTestId("text-input").value).toBe("this is a test case 1");
  });

  it("has an input with placeholder Enter Write a review", () => {
    render(
      <FeedbackProvider>
        <FeedbackForm />
      </FeedbackProvider>
    );
    expect(screen.getByPlaceholderText("Write a review")).toBeTruthy();
    expect(FeedbackForm).toBeTruthy();
  });

  it("should update text input onChange Event", () => {
    render(
      <FeedbackProvider>
        <FeedbackForm />
      </FeedbackProvider>
    );
    const textInput = screen.getByPlaceholderText("Write a review");
    //now checking whether onChange is working or not
    //mock fire change event with the mock value
    fireEvent.change(textInput, { target: { value: "this is a test case 1" } });
    //finally checking if the input element is showing the entered text input in Jsx
    expect(textInput.value).toBe("this is a test case 1");
  });

  it("render text input and shouls have the type attribute", () => {
    render(
      <FeedbackProvider>
        <FeedbackForm />
      </FeedbackProvider>
    );
    const inputEl = screen.getByTestId("text-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
  });

  it("Send button should have type Submit and it should be disable by default", () => {
    const { getByRole } = render(
      <FeedbackProvider>
        <FeedbackForm />
      </FeedbackProvider>
    );
    const submitBtn = getByRole("button", { name: "Send" });
    expect(submitBtn).toHaveAttribute("type", "submit");
    expect(submitBtn).toBeDisabled();
  });

  it("Should show error message if input value is less than 10", () => {
    render(
      <FeedbackProvider>
        <FeedbackForm />
      </FeedbackProvider>
    );
    const input = screen.getByTestId("text-input");
    fireEvent.change(input, { target: { value: "Hello" } });
    expect(screen.getByRole("button")).toBeDisabled();
    const button = screen.getByRole("button", { name: /Send/i });
    userEvent.clear(input);
    expect(button).toBeDisabled();
  });

  it("pass valid text to input field", () => {
    render(
      <FeedbackProvider>
        <FeedbackForm />
      </FeedbackProvider>
    );
    const input = screen.getByTestId("text-input");
    userEvent.type(input, "Write a Review");
    expect(screen.queryByTestId("message")).not.toBeInTheDocument();
  });

  it("if the text is less than 10 chracter or invalid", () => {
    render(
      <FeedbackProvider>
        <FeedbackForm />
      </FeedbackProvider>
    );
    const inputEl = screen.getByTestId("text-input");
    userEvent.type(inputEl, "test");
    expect(screen.getByTestId("text-input")).toHaveValue("test");
    expect(screen.queryByTestId("message")).toBeInTheDocument();
    expect(screen.queryByTestId("message").textContent).toEqual(
      "Text must be at least 10 characters"
    );
  });

  // it("Add the feedback to list", () => {
  //   render(
  //     <FeedbackContext.Provider value={ addFeedback }>
  //       <FeedbackForm />
  //     </FeedbackContext.Provider>
  //   );
  //   expect(addFeedback).toHaveBeenCalledTimes(1);
  // });
});
