import { Task } from "../../models/Task";
import "./Task.css";
const TaskComponent = (props: { task: Task; status?: string }) => {
  return (
    <>
      <div className={`task ` + props.status}>
        <div>{props.task.description}</div>
        <div className="buttons">
          <img className="button complete" src="/complete.png" alt="Complete task" />
          <img className="button cancel" src="/cancel.png" alt="Cancel task" />
        </div>
      </div>
    </>
  );
};

export default TaskComponent;
