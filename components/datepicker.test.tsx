import "@testing-library/jest-dom/extend-expect";
import { DatePicker } from "./DatePicker";
import { render, screen } from "@testing-library/react";

describe("Datepicker", () => {
  const daysOfTheMonth = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  beforeEach(() => {
    // Make every test think it's Jan 2, 2023
    jest.useFakeTimers().setSystemTime(new Date("2023-01-02"));
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
});