import React from "react";
import WeekManager from "./WeekManager";

export default function WeekCreator() {
  // Get the current date
  const currentDate = new Date();
  const today = currentDate.getDay(); // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)

  // Calculate the starting date (Monday) of the current week
  const startingDate = new Date(currentDate);
  startingDate.setDate(currentDate.getDate() - today + (today === 0 ? -6 : 1));

  // Create an array to hold the days of the week
  const week = [];

  // Push Monday as the first item in the week array
  const monday = new Date(startingDate);
  const mondayFormatted = monday.toLocaleString("default", { weekday: "long" });
  week.push({ date: monday.toDateString(), dayName: mondayFormatted, status: 'past', todos: [] });

  // Loop through the remaining days of the week (Tuesday to Sunday)
  for (let i = 1; i < 7; i++) {
    const nextDay = new Date(monday);
    nextDay.setDate(monday.getDate() + i);
    const formattedDate = nextDay.toDateString();
    const dayName = nextDay.toLocaleString("default", { weekday: "long" });
    let status = '';

    // Compare each day's date with the current date to determine status
    if (nextDay < currentDate) {
      status = 'past';
    } else if (nextDay > currentDate) {
      status = 'future';
    } else {
      status = 'current';
    }

    week.push({ date: formattedDate, dayName: dayName, status: status, todos: [] });
  }

  return <WeekManager weekData={week} />;
}
