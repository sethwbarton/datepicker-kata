import "@testing-library/jest-dom/extend-expect";
import { DatePicker } from "./DatePicker";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("Datepicker", () => {
  const daysOfTheMonth = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  beforeEach(() => {
    // Make every test think it's Jan 2, 2023
    jest.useFakeTimers().setSystemTime(new Date("2023-01-02T00:00:00Z"));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("Shows every day of the month", () => {
    render(<DatePicker />);

    daysOfTheMonth.forEach((day) => {
      expect(screen.getByText(day)).toBeInTheDocument();
    });
  });

  it("Starts with the current month/year selected", () => {
    render(<DatePicker />);

    expect(screen.getByText("January 2023")).toBeInTheDocument();
  });

  it("Starts with the current day selected", () => {
    render(<DatePicker />);

    expect(screen.getByLabelText("1")).toBeChecked();
  });

  it("Allows going forward months", () => {
    render(<DatePicker />);

    const nextMonthButton = screen.getByRole("button", {
      description: "Next Month",
    });

    act(() => {
      nextMonthButton.click();
    });

    expect(screen.getByText("February 2023")).toBeInTheDocument();
  });
});
