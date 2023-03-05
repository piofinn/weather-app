import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { LocationInfoItem } from "./LocationInfoItem";

describe("LocationInfoItem", () => {
  it("Renders with the correct info", () => {
    render(<LocationInfoItem description="Sunrise" title="06:40" />);

    expect(screen.getByText("Sunrise")).toBeInTheDocument();
    expect(screen.getByText("06:40")).toBeInTheDocument();
  });
});
