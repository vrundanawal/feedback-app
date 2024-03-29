import { render } from "@testing-library/react";
import App from "./App";

// describe - group of related test specs => TEST SUITE

describe("AppComponent", () => {
  it("should render app comp", () => {
    expect(App).toBeTruthy();
  });

  it("should take a snapshot", () => {
    const { asFragment } = render(<App />);
    expect(asFragment(<App />)).toMatchSnapshot();
  });
});
