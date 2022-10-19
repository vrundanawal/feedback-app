import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FeedbackForm from "./FeedbackForm";
import userEvent from "@testing-library/user-event";
import { shallow } from "enzyme";

describe("<FeedbackForm />", () => {
  it("should render FeedbackForm component", () => {
    expect(FeedbackForm).toBeTruthy();
  });

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
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("Should show error message if input value is less than 10", () => {
    render(<FeedbackForm />);
    const input = screen.getByTestId("text-input");
    fireEvent.change(input, { target: { value: "Hello" } });
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("pass valid text to input field", () => {
    render(<FeedbackForm />);
    const input = screen.getByTestId("text-input");
    userEvent.type(input, "Write a Review");
    expect(screen.queryByTestId("message")).not.toBeInTheDocument();
  });

  test("if the text is less than 10 chracter or invalid", () => {
    render(<FeedbackForm />);
    const inputEl = screen.getByTestId("text-input");
    userEvent.type(inputEl, "test");
    expect(screen.getByTestId("text-input")).toHaveValue("test");
    expect(screen.queryByTestId("message")).toBeInTheDocument();
    expect(screen.queryByTestId("message").textContent).toEqual(
      "Text must be at least 10 characters"
    );
  });

  test("renders the form with selected value", () => {
    render(<FeedbackForm />);
    const selectInput = screen.getByTestId("select-test");
    fireEvent.change(selectInput, { target: { value: "1" } });
    expect(selectInput.value).toBe("1");
  });
});

//with enzyme  write a snapshot testing
test("should test feedback form component", () => {
  const wrapper = shallow(<FeedbackForm />);
  expect(wrapper).toMatchSnapshot();
});
//add feedback to list with handler
// test("should handle onSubmit handler", () => {
//   const onSubmitSpy = jest.fn();
//   const wrapper = shallow(<FeedbackForm handleAdd={onSubmitSpy} />);
//   expect(wrapper).toMatchSnapshot();
//   wrapper.find("form").simulate("submit");

//   expect(onSubmitSpy).toHaveBeenCalled();
// });
