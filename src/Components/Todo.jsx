import trashIcone from "../assets/trash.svg";
import validIcone from "../assets/solid.svg";
import { useState } from "react";
import "../Styles/todo.css";

const Todo = ({id, content, removeTask}) => {

  const [taskValided, setTaskValideted]= useState(false)

  const validToDo= ()=>{
setTaskValideted(!taskValided)
  }

  return (
    <div className={`todo ${id}`}>
      <p>{content}</p>
      <div className="actions-todo">
        <div className="icone-trash" onClick={()=>removeTask(id)}><img src={trashIcone} alt="" /></div>
        <div className="icone-valid" onClick={()=>validToDo()} style={taskValided ? { background : "green"}:{background : "white"}}><img src={validIcone} alt="" /></div>
      </div>
    </div>
  );
};

export default Todo;