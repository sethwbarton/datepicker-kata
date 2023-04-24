import { DateTime } from "luxon";
import { useEffect, useState } from "react";

export function DatePicker(props: { onChange: (newTime: DateTime) => void }) {
  const [selectedDateTime, setSelectedDateTime] = useState<DateTime>(
    DateTime.now().startOf("day")
  );

  useEffect(() => {
    props.onChange(selectedDateTime);
  }, [selectedDateTime, props]);

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
      {getDaysOfTheMonth(selectedDateTime).map((day) => {
        return (
          <DayButton
            key={day}
            day={day}
            checked={day === selectedDateTime.day}
            selectedDateTime={selectedDateTime}
            setSelectedDateTime={setSelectedDateTime}
          />
        );
      })}
    </div>
  );
}

function DayButton(props: {
  day: number;
  checked: boolean;
  selectedDateTime: DateTime;
  setSelectedDateTime: (newTime: DateTime) => void;
}) {
  return (
    <>
      <input
        type={"radio"}
        id={`${props.day}-button`}
        checked={props.checked}
        onClick={() => {
          props.setSelectedDateTime(
            props.selectedDateTime.set({ day: props.day })
          );
        }}
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

function getDaysOfTheMonth(selectedDateTime: DateTime) {
  return Array.from(Array(selectedDateTime.daysInMonth).keys()).map((n) => {
    return n + 1;
  });
}
