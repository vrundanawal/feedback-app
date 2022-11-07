import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import AboutPage from "../pages/AboutPage";

describe("About Page", () => {
  it("Should have text - back to home", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <AboutPage />
      </MemoryRouter>
    );
    userEvent.click(screen.getByRole("link", { name: "Back to Home" }));
  });
});
