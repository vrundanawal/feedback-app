import { render } from "@testing-library/react";

import Header from "../components/Header";

describe("Header component", () => {
  it("should render the text in UI", () => {
    //Arrange
    const props = {
      text: "Feedback UI",
      bgColor: "rgb(0 0 0 / 0.4%)",
      textColor: "#ff6a95",
    };
    //ACT
    const { getByText } = render(<Header {...props} />);
    //Assert
    const textNode = getByText(props.text);
    expect(textNode).toBeDefined();
  });
});
