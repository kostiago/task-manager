import { useState } from "react";
import CustomInput from "../inputs/CustomInput";
import "./AddTask.scss";
import CustomButton from "../button/CustomButton";
import { FaPlus } from "react-icons/fa";
import { useAlert } from "react-alert";

const AddTask = () => {
  const [task, setTask] = useState("");

  const alert = useAlert();

  const onChange = (e) => {
    setTask(e.target.value);
  };

  const handleTaskAddition = async () => {
    try {
      if (task.length === 0) {
        return alert.error("Adicione uma tarefa!!");
      }
    } catch (error) {}
  };

  return (
    <section className="add-task-container">
      <CustomInput
        label="Adicionar nova tarefa..."
        value={task}
        onChange={onChange}
      />

      <CustomButton onClick={handleTaskAddition}>
        <FaPlus size={14} color="#fff" />
      </CustomButton>
    </section>
  );
};

export default AddTask;
