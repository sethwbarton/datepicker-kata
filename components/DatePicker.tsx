import { DateTime } from "luxon";
import { useState } from "react";

export function DatePicker() {
  const [selectedDateTime, setSelectedDateTime] = useState<DateTime>(
    DateTime.now()
  );

  return (
    <div>
      <button
        title={"Previous Month"}
        onClick={() =>
          setSelectedDateTime(selectedDateTime.minus({ month: 1 }))
        }
      >
        Previous Month
      </button>
      <label>
        {selectedDateTime.monthLong} {selectedDateTime.year}
      </label>
      <button
        title={"Next Month"}
        onClick={() => setSelectedDateTime(selectedDateTime.plus({ month: 1 }))}
      >
        Next Month
      </button>
      {daysOfTheMonth.map((day) => {
        return (
          <DayButton key={day} day={day} checked={day === DateTime.now().day} />
        );
      })}
    </div>
  );
}

const daysOfTheMonth = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function DayButton(props: { day: number; checked: boolean }) {
  return (
    <>
      <input
        type={"radio"}
        id={`${props.day}-button`}
        checked={props.checked}
      />
      <label htmlFor={`${props.day}-button`}>{props.day}</label>
    </>
  );
}
