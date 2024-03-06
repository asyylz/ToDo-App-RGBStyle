import { useState } from "react";
import EditableTodoLine from "./EditableTodoLine";
import IsDoneCheckBox from "./IsDoneCheckbox";

import "../../styles/btnToDoAdd.css"
import "../../styles/content.css"
import "../../styles/tabs.css"
import "../../styles/container.css"


export default function DisplayToDoContent({
  storedWeekData,
  setStoredWeekData,
  selectedDay,
}) {
  const [input, setInput] = useState("");

  function handleAddBtn() {
    if (!input || input.trim() === "") {
      return;
    }
    const updatedWeekData = storedWeekData.map((day) => {
      if (day.date === selectedDay) {
        const todoIdCounter = day.todos ? day.todos.length + 1 : 1;
        const updatedTodos = [
          ...(day.todos || []),
          { id: todoIdCounter, description: input, isDone: false },
        ];
        return { ...day, todos: updatedTodos };
      }
      return day;
    });

    setStoredWeekData(updatedWeekData);
    setInput("");
  }

  return (
    
    <section className="content">
      {storedWeekData.map((day, i) => (
        <div
          className={day.date === selectedDay ? "item checked" : "item"}
          id={`content-${i + 1}`}
          key={i}
        >
        <>
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            name="todo-content"
            placeholder="Enter your todo here..."
            value={input}
            id="content-input"
            onKeyDown={(e) => e.key === "Enter" && handleAddBtn()}
          />
          <button onClick={handleAddBtn} role="button" className="btnAdd">
            Add ToDo
          </button>
          </>
          <div className="todo-wrapper-container" style={{ marginTop: "1rem" }}>
            {day.date === selectedDay && (
              <div>
                {day.todos &&
                  day.todos.map((todo, j) => (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <IsDoneCheckBox
                        todo={todo}
                        storedWeekData={storedWeekData}
                        setStoredWeekData={setStoredWeekData}
                        selectedDay={selectedDay}
                      />
                      <EditableTodoLine
                        todo={todo}
                        j={j}
                        storedWeekData={storedWeekData}
                        setStoredWeekData={setStoredWeekData}
                        selectedDay={selectedDay}
                      />
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
