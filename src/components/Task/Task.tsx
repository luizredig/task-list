import { Task } from "../../models/Task";
import "./Task.css";

const TaskComponent = (props: {
  task: Task;
  status?: string;
  tasks: Task[];
  handleSetTasks?: any;
}) => {
  function handleSetCompletedTask(taskId: number | string) {
    let upgradedTasks = props.tasks.map((task) => {
      if (task.id === taskId) {
        task.completed = true;
        return task;
      }
      return task;
    });
    props.handleSetTasks(upgradedTasks);
  }

  function handleSetCanceledTask(taskId: number | string) {
    let upgradedTasks = props.tasks.map((task) => {
      if (task.id === taskId) {
        task.canceled = true;
        return task;
      }
      return task;
    });
    props.handleSetTasks(upgradedTasks);
  }
  return (
    <>
      <div className={`task ` + props.status}>
        <div>{props.task.description}</div>
        {props.status !== "completed" && props.status !== "canceled" && (
          <div className="buttons">
            <button
              className="button"
              onClick={() => handleSetCompletedTask(props.task.id)}
            >
              <img
                className="complete"
                src="/complete.png"
                alt="Complete task"
              />
            </button>
            <button
              className="button"
              onClick={() => handleSetCanceledTask(props.task.id)}
            >
              <img className="cancel" src="/cancel.png" alt="Cancel task" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default TaskComponent;
