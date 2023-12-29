import "./Tasks.css";

import { Task } from "../../models/Task";
import TaskComponent from "../Task/Task";

let tasks: Task[] = [
  {
    id: 0,
    description: "task 1",
    completed: false,
    canceled: false,
  },
  {
    id: 1,
    description: "task 2",
    completed: false,
    canceled: false,
  },
  {
    id: 3,
    description: "task 3",
    completed: false,
    canceled: false,
  },
];

const Tasks = () => {
  return (
    <>
      <div className="container">
        <h3 className="filter-title">New task</h3>
        <input type="text" />
        <button>Create</button>
        <hr />
        <h3 className="filter-title">Pending tasks</h3>
        {tasks.map((task) => (
          <TaskComponent key={task.id} task={task} />
        ))}
        <hr />
        <h3 className="filter-title">Completed tasks</h3>
        <hr />
        <h3 className="filter-title">Canceled tasks</h3>
      </div>
    </>
  );
};

export default Tasks;
