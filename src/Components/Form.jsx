import "../Styles/form.css";

const Form = ({addTask, setTask , task}) => {



  return (
    <div className="form-container">
      <form action="form-add-todo" onSubmit={addTask}>
        <input type="text" value={task} className="content-form" onChange={(e)=> setTask(e.target.value)} placeholder="Ecrivez votre nouvelle tache"/>
        <input className="button-submit-form" type="submit" value="Ajouter"/>
      </form>
    </div>
  );
};

export default Form;