import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test, vi } from "vitest";
import Home from "@/pages/Home";

function mockClipboard() {
  Object.defineProperty(navigator, "clipboard", {
    value: {
      writeText: vi.fn().mockResolvedValue(undefined),
    },
    configurable: true,
  });
}

test("renders hero and poem", () => {
  render(<Home />);
  expect(screen.getByRole("heading", { name: /nicole missiona/i })).toBeInTheDocument();
  expect(screen.getByText(/tula \(tagalog poem\)/i)).toBeInTheDocument();
  expect(screen.getByText(/for the dancing and the dreaming/i)).toBeInTheDocument();
});

test("copy poem shows success toast", async () => {
  mockClipboard();
  const user = userEvent.setup();

  render(<Home />);
  const copyButtons = screen.getAllByRole("button", { name: /copy poem/i });
  await user.click(copyButtons[0]!);
  expect(await screen.findByRole("status")).toHaveTextContent(/poem copied/i);
});

