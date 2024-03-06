
import "../../styles/doneCheckbox.css"
export default function IsDoneCheckBox({
  todo,
  storedWeekData,
  setStoredWeekData,
  selectedDay,
}) {
  function handleIsDoneBtn(todoId) {
    const updatedWeekData = storedWeekData.map((day) => {
      if (day.date === selectedDay) {
        const updatedTodos = day.todos.map((todo) => {
          if (todo.id === todoId) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          }
          return todo;
        });
        return { ...day, todos: updatedTodos };
      }
      return day;
    });
    setStoredWeekData(updatedWeekData);
  }

  return (
    <div className="checkbox-wrapper-57">
      <label className="container">
        <input
          type="checkbox"
          onChange={() => handleIsDoneBtn(todo.id)}
          checked={todo.isDone}
        />
        <div className="checkmark"></div>
      </label>
    </div>
  );
}
