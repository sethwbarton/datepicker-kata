import { DateTime } from "luxon";
import { useState } from "react";

export function DatePicker() {
  const [selectedDateTime, setSelectedDateTime] = useState<DateTime>(
    DateTime.now()
  );

  const daysOfTheMonth = Array.from(
    Array(selectedDateTime.daysInMonth).keys()
  ).map((n) => {
    return n + 1;
  });
  console.log(daysOfTheMonth);

  return (
    <div>
      <PreviousMonthButton
        setSelectedDateTime={setSelectedDateTime}
        selectedDateTime={selectedDateTime}
      />
      <label>
        {selectedDateTime.monthLong} {selectedDateTime.year}
      </label>
      <NextMonthButton
        setSelectedDateTime={setSelectedDateTime}
        selectedDateTime={selectedDateTime}
      />
      {daysOfTheMonth.map((day) => {
        return (
          <DayButton key={day} day={day} checked={day === DateTime.now().day} />
        );
      })}
    </div>
  );
}

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

function PreviousMonthButton(props: {
  setSelectedDateTime: (newDateTime: DateTime) => void;
  selectedDateTime: DateTime;
}) {
  return (
    <button
      title={"Previous Month"}
      onClick={() =>
        props.setSelectedDateTime(props.selectedDateTime.minus({ month: 1 }))
      }
    >
      Previous Month
    </button>
  );
}

function NextMonthButton(props: {
  setSelectedDateTime: (newDateTime: DateTime) => void;
  selectedDateTime: DateTime;
}) {
  return (
    <button
      title={"Next Month"}
      onClick={() =>
        props.setSelectedDateTime(props.selectedDateTime.plus({ month: 1 }))
      }
    >
      Next Month
    </button>
  );
}
