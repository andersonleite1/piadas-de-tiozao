import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./index";

describe("Header", () => {
  it("should render the component without errors", () => {
    render(<Header title="Title fake" />);
  });

  it("should display the title", () => {
    render(<Header title="Title fake" />);
    const title = screen.getByText("Title fake");
    expect(title).toBeInTheDocument();
  });
});
