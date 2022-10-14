import { render } from "@testing-library/react";

import Header from "./Header";

it("renders", () => {
  const { asFragment } = render(<Header text="Feedback UI" />);
  expect(asFragment()).toMatchSnapshot();
});
