import { Task } from "../../models/Task";
import "./Task.css";

const TaskComponent = (props: {
  task: Task;
  status?: string;
  tasks: Task[];
  handleSetTasks?: any;
  handleFormatter?: any;
}) => {
  function handleSetCompletedTask(taskId: number) {
    let upgradedTasks = props.tasks.map((task) => {
      if (task.id === taskId) {
        task.completed = true;
        return task;
      }
      return task;
    });
    props.handleSetTasks(upgradedTasks);
  }

  function handleSetCanceledTask(taskId: number) {
    let upgradedTasks = props.tasks.map((task) => {
      if (task.id === taskId) {
        task.canceled = true;
        return task;
      }
      return task;
    });
    props.handleSetTasks(upgradedTasks);
  }

  function handleUpdateTask(taskId: number) {
    let input = document.getElementById(
      "inputTask" + taskId
    ) as HTMLInputElement;
    let newValue = input.value;

    let upgradedTasks = props.tasks.map((task) => {
      if (task.id === taskId) {
        let formattedValue = props.handleFormatter(newValue);

        if (formattedValue.length > 0) {
          task.description = props.handleFormatter(newValue);
          return task;
        }

        return task;
      }
      return task;
    });

    props.handleSetTasks(upgradedTasks);
  }
  return (
    <>
      <div className={`task ` + props.status}>
        {props.status !== "completed" && props.status !== "canceled" && (
          <input
            type="text"
            className="valueTask"
            id={`inputTask` + props.task.id}
            defaultValue={props.task.description}
            onKeyUp={() => handleUpdateTask(props.task.id)}
          ></input>
        )}
        {props.status === "completed" && <h2>{props.task.description}</h2>}
        {props.status === "canceled" && <h2>{props.task.description}</h2>}
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
