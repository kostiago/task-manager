const TaskItem = ({ task }) => {
  return (
    <>
      <h1>{task.description}</h1>
      <p>{task.isCompleted ? "Completa" : "Não Completa"}</p>
    </>
  );
};

export default TaskItem;
