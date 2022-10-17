import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RatingSelect from "./RatingSelect";

test("renders the form with selected value", () => {
  render(<RatingSelect />);
  const selectInput = screen.getByTestId("select-test");

  fireEvent.change(selectInput, { target: { value: "1" } });
  expect(selectInput.value).toBe("1");
});
