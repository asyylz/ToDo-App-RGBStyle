import { useState } from "react";
import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";

export default function EditableTodoLine({
  todo,
  j,
  storedWeekData,
  setStoredWeekData,
  selectedDay,
}) {
  const [editingTodoId, setEditingTodoId] = useState(null);

  function handleDeleteBtn(todoId) {
    const updatedWeekData = storedWeekData.map((day) => {
      if (day.date === selectedDay) {
        const updatedTodos = day.todos.filter((todo) => todo.id !== todoId);
        return { ...day, todos: updatedTodos };
      }
      return day;
    });
    console.log(updatedWeekData);
    setStoredWeekData(updatedWeekData);
  }

  // function handleIsDoneBtn(todoId) {
  //   const updatedWeekData = storedWeekData.map((day) => {
  //     if (day.date === selectedDay) {
  //       const updatedTodos = day.todos.map((todo) => {
  //         if (todo.id === todoId) {
  //           return {
  //             ...todo,
  //             isDone: !todo.isDone,
  //           };
  //         }
  //         return todo;
  //       });
  //       return { ...day, todos: updatedTodos };
  //     }
  //     return day;
  //   });
  //   setStoredWeekData(updatedWeekData);
  // }

  function handleEditTodoDescription(todoId, newValue) {
    const updatedWeekData = storedWeekData.map((day) => {
      if (day.date === selectedDay) {
        const updatedTodos = day.todos.map((todo) => {
          if (todo.id === todoId) {
            return {
              ...todo,
              description: newValue,
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
    <>
      {/* <div className="checkbox-wrapper-57">
        <label className="container">
          <input
            type="checkbox"
            onChange={() => handleIsDoneBtn(todo.id)}
            checked={todo.isDone}
          />
          <div className="checkmark"></div>
        </label>
      </div> */}
      {editingTodoId === todo.id ? (
        <input
          //id={`edit-input-${todo.id}`}
          id="edit-input"
          value={todo.description}
          onChange={(e) => handleEditTodoDescription(todo.id, e.target.value)}
          onBlur={() => setEditingTodoId(null)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleEditTodoDescription();
              setEditingTodoId(null);
            }
          }}
        />
      ) : (
        <p className={todo.isDone ? "done" : ""}>
          {j + 1}--{todo.description}
        </p>
      )}
      <RiEdit2Line
        size={50}
        style={{ cursor: "pointer" }}
        //color="#ff7300"
        color={editingTodoId ? "red" : "#ff7300"}
        onClick={() =>
          editingTodoId ? setEditingTodoId(null) : setEditingTodoId(todo.id)
        }
      />
      <RiDeleteBinLine
        size={50}
        style={{ cursor: "pointer" }}
        color="#ff7300"
        onClick={() => handleDeleteBtn(todo.id)}
      />
    </>
  );
}
