import { Inter } from "@next/font/google";
import { DatePicker } from "../components/DatePicker";
import { DateTime } from "luxon";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [pickedDate, setPickedDate] = useState<DateTime>(DateTime.now());

  return (
    <>
      <DatePicker onChange={setPickedDate} />
    </>
  );
}
