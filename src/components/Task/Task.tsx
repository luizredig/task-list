import { Task } from "../../models/Task";
import "./Task.css";

const TaskComponent = (props: { task: Task }) => {
  return (
    <>
      <div className="task">{props.task.description}</div>
    </>
  );
};

export default TaskComponent;
