import React from "react";
import { useEffect } from "react";
import WeekDisplay from "./WeekDisplay";
import useLocalStorage from "../useLocalStorage";

export default function WeekManager({ weekData }) {
  //Using useLocalStorage hook to manage weekData in local storage
  const [storedWeekData, setStoredWeekData] = useLocalStorage(
    "weekInfo",
    weekData
  );

  // Update local storage with the new week data
  // This will happen whenever the week data changes
  useEffect(() => {
    setStoredWeekData(storedWeekData);
  }, [weekData, setStoredWeekData]);

  // weekData={weekData}  later maybe i ll add
  return (
    <WeekDisplay
      storedWeekData={storedWeekData}
      setStoredWeekData={setStoredWeekData}
    />
  );
}
