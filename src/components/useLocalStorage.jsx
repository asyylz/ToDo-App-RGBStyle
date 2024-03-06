import { useState, useEffect } from "react";

function useLocalStorage(weekDataKey, defaultValue) {
  // Ensure that weekDataKey is a string
  if (typeof weekDataKey !== "string") {
    throw new Error("The weekDataKey parameter must be a string.");
  }

  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(weekDataKey);

      return storedValue ? JSON.parse(storedValue) : defaultValue;
    } catch (error) {
      console.error("Error retrieving value from local storage:", error);

      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(weekDataKey, JSON.stringify(value));
    } catch (error) {
      console.error("Error setting value in local storage:", error);
    }
  }, [weekDataKey, value]);

  return [value, setValue];
}

export default useLocalStorage;
