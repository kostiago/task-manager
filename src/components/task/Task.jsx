import { useState } from "react";
import "./Task.scss";

const Tasks = () => {
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
    <section className="tasks-container">
      <h2>Minhas Tarefas</h2>
      <div className="last-tasks">
        <h3>Ultimas Tarefas</h3>
        <div className="task-list">
          {tasks
            .filter((task) => task.isCompleted === false)
            .map((lastTask) => (
              <p>{lastTask.description}</p>
            ))}
        </div>
      </div>
      <div className="completed-tasks">
        <h3>Tarefas Concluidas</h3>
        <div className="task-list">
          {tasks
            .filter((task) => task.isCompleted)
            .map((completedTask) => (
              <p>{completedTask.description}</p>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Tasks;
