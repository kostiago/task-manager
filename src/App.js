import "./App.css";
import { useState } from "react";
import TaskItem from "./components/TaskItem";

function App() {
  const [tasks, setTaks] = useState([
    {
      id: 1,
      description: "Estudar Programação",
      isCompleted: false,
    },

    {
      id: 2,
      description: "Ler diariamente",
      isCompleted: true,
    },
  ]);

  const handleChangeMessage = () => {
    setMessage("Olá mundo!");
  };

  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
}

export default App;
