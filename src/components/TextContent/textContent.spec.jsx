import React from "react";
import { render, screen } from "@testing-library/react";
import TextContent from "./index";

describe("TextContent", () => {
  it("should render the component without errors", () => {
    render(<TextContent />);
  });

  it("should display the text", () => {
    render(<TextContent>Test component</TextContent>);
    const text = screen.getByText("Test component");
    expect(text).toBeInTheDocument();
  });
});
