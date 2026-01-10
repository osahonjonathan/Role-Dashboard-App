import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { RoleCard } from "./RoleCard";
import { RadioGroup } from "@/components/ui/radio-group";

describe("RoleCard", () => {
  const defaultProps = {
    id: "superadmin",
    title: "Superadmin",
    lastActive: "Last active 06/2023",
    isSelected: false,
    onSelect: vi.fn(),
  };

  const renderWithRadioGroup = (props = defaultProps) => {
    return render(
      <RadioGroup value={props.isSelected ? props.id : ""}>
        <RoleCard {...props} />
      </RadioGroup>
    );
  };

  it("renders the title and last active message", () => {
    renderWithRadioGroup();
    expect(screen.getByText("Superadmin")).toBeInTheDocument();
    expect(screen.getByText("Last active 06/2023")).toBeInTheDocument();
  });

  it("shows selection styles when isSelected is true", () => {
    const { container } = renderWithRadioGroup({
      ...defaultProps,
      isSelected: true,
    });
    const card = container.querySelector(".relative") as HTMLElement;
    expect(card).toHaveClass("border-purple-600");
    expect(card).toHaveClass("bg-purple-50/30");
  });

  it("calls onSelect when clicked", () => {
    renderWithRadioGroup();
    fireEvent.click(screen.getByText("Superadmin"));
    expect(defaultProps.onSelect).toHaveBeenCalledWith("superadmin");
  });

  it("shows check icon when selected", () => {
    renderWithRadioGroup({
      ...defaultProps,
      isSelected: true,
    });
  });
});
