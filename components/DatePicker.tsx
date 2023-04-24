import { DateTime } from "luxon";

export function DatePicker() {
  return (
    <div>
      <label>January</label>
      {daysOfTheMonth.map((day) => {
        return day === DateTime.now().day ? (
          <>
            <input type={"radio"} id={`${day}-button`} checked={true} />
            <label htmlFor={`${day}-button`}>{day}</label>
          </>
        ) : (
          <>
            <input type={"radio"} id={`${day}-button`} />
            <label htmlFor={`${day}-button`}>{day}</label>
          </>
        );
      })}
    </div>
  );
}

const daysOfTheMonth = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];
