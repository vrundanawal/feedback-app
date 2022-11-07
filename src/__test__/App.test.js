import "@testing-library/jest-dom";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import { FeedbackProvider } from "../context/FeedbackContext";

describe("AppComponent", () => {
  it("Should render the app", () => {
    expect(
      <FeedbackProvider>
        <App />
      </FeedbackProvider>
    ).toBeTruthy();
  });
});
