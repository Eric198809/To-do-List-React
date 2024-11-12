import trashIcone from "../assets/trash.svg";
import validIcone from "../assets/solid.svg";
import editIcone from "../assets/edit.svg";
import { useState } from "react";
import "../Styles/todo.css";

const Todo = ({ id, content, removeTask, changeContentTask, }) => {
  const [taskValided, setTaskValideted] = useState(false);
  const [editToggle, setEditToggle] = useState(false);
  const [localEditContent, setLocalEditContent] = useState(content);

  const validToDo = () => {
    setTaskValideted(!taskValided);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    changeContentTask(id, localEditContent); 
    setEditToggle(false)
  };

 
  

  return (
    <div className={`todo ${id}`}>
      <div className="content">
        <div
          className="icone-valid"
          onClick={() => validToDo()}
          style={
            taskValided ? { background: "green" } : { background: "white" }
          }
        >
          <img src={validIcone} alt="tache validée" />
        </div>
        {editToggle ? (
          <form onSubmit={handleEditSubmit}>
            <textarea autoFocus={true} defaultValue={localEditContent} onChange={(e) => setLocalEditContent(e.target.value)}></textarea>
            <input type="submit" value="Valider modification" />
          </form>
        ) : (
          <p>{content}</p>
        )}
      </div>

      <div className="actions-todo">
        <div className="edit-trash" onClick={() => setEditToggle(!editToggle)}>
          <img src={editIcone} alt="" />
        </div>
        <div className="icone-trash" onClick={() => removeTask(id)}>
          <img src={trashIcone} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Todo;
