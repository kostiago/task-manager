import "./TaskItem.scss";

import { MdDeleteForever } from "react-icons/md";

const TaskItem = ({ task }) => {
  return (
    <section className="task-item-container">
      <div className="task-description">
        <label
          className={
            task.isCompleted
              ? "checkbox-container-completed"
              : "checkbox-container"
          }
        >
          {task.description}
          <input type="checkbox" defaultChecked={task.isCompleted} />
          <span
            className={task.isCompleted ? "checkmark completed" : "checkmark"}
          ></span>
        </label>
      </div>

      <div className="delete">
        <MdDeleteForever size={18} color="#f97474" />
      </div>
    </section>
  );
};

export default TaskItem;
