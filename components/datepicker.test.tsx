import { DatePicker } from "./DatePicker";
import { render } from "@testing-library/react";

describe("Datepicker", () => {
  it("Can render the component", () => {
    render(<DatePicker />);
  });
});
