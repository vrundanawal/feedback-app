import AboutIconLink from "../components/AboutIconLink";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("AboutIconLink", () => {
  test("should link to about page", () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<AboutIconLink />} />
        </Routes>
      </MemoryRouter>
    );
    const links = screen.getAllByRole("link");

    expect(links[0].href).toContain("/about");
  });
});
