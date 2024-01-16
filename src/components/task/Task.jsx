import { useState } from "react";
import "./Task.scss";
import TaskItem from "./TaskItem";

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

    {
      id: 3,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, perspiciatis velit ut at id omnis esse possimus sunt atque doloremque!",
      isCompleted: false,
    },
    {
      id: 4,
      description: "Acordar as 7 da manhã todo dia",
      isCompleted: false,
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
              <TaskItem task={lastTask} />
            ))}
        </div>
      </div>
      <div className="completed-tasks">
        <h3>Tarefas Concluidas</h3>
        <div className="task-list">
          {tasks
            .filter((task) => task.isCompleted)
            .map((completedTask) => (
              <TaskItem task={completedTask} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Tasks;
