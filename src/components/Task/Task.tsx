import { Task } from "../../models/Task";
import "./Task.css";

const TaskComponent = (props: { task: Task; status?: string }) => {
  return (
    <>
      <div className={`task ` + props.status}>{props.task.description}</div>
    </>
  );
};

export default TaskComponent;
