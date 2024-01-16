import { useState } from "react";
import CustomInput from "../inputs/CustomInput";
import "./AddTask.scss";

const AddTask = () => {
  const [task, setTask] = useState("");
  const onChange = (e) => {
    setTask(e.target.value);
  };
  return (
    <section className="add-task-container">
      <CustomInput
        label="Adicionar nova tarefa..."
        value={task}
        onChange={onChange}
      />
    </section>
  );
};

export default AddTask;
