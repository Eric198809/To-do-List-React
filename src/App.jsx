import { useState } from "react";
import Form from "./Components/Form";
import Todo from "./Components/Todo";
import "./Styles/App.css";

function App() {
  const [listTasks, setListTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: listTasks.length + 1,
      content: task,
    };

    setListTasks([...listTasks, newTask]);
    setTask("");
  };

  const removeTask = (id) => {
    const removeConfirmation= confirm("Etes vous sur de vouloir supprimer la tâche? ")
    if (removeConfirmation) {
        const newList = listTasks.filter((task) => task.id !== id);
    setListTasks(newList);
  };
   
      
    }
  

  return (
    <>
      <div className="todoList-container">
        <h1>Ma Todo List</h1>
        <Form addTask={addTask} setTask={setTask} task={task} />
        <div className="todos">
          {listTasks.length > 0 ? (
            listTasks.map((todo) => (
              <Todo
                key={todo.id}
                id={todo.id}
                content={todo.content}
                removeTask={removeTask}
              />
            ))
          ) : (
            <p>Vous n'avez pas de taches</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
