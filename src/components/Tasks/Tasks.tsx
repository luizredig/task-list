import "./Tasks.css";

import { Task } from "../../models/Task";
import TaskComponent from "../Task/Task";
import { useState } from "react";

const Tasks = () => {
  let [tasks, setTasks] = useState<Task[]>([]);

  let pendingTasks = tasks.filter((task) => {
    return !(task.completed || task.canceled);
  });
  let completedTasks = tasks.filter((task) => {
    return task.completed;
  });
  let canceledTasks = tasks.filter((task) => {
    return task.canceled;
  });

  function handleCreateTask() {
    let input = (
      document.getElementById("inputTask") as HTMLInputElement
    );
    let inputValue: string = input.value;
    let newTask: Task = new Task(capitalizeFirstLetter(inputValue));
    setTasks([...tasks, newTask]);
    input.value = "";
    input.focus();
  }

  function capitalizeFirstLetter(str: string): string {
    return str.replace(/^\w/, (c) => c.toUpperCase());
  }

  return (
    <>
      <div className="container">
        <h3 className="filter-title">New task</h3>
        <input type="text" id="inputTask" />
        <button onClick={handleCreateTask}>Create</button>
        <hr />
        <h3 className="filter-title">Pending tasks</h3>
        {pendingTasks.map((task) => (
          <TaskComponent key={task.id} task={task} />
        ))}
        <hr />
        <h3 className="filter-title">Completed tasks</h3>
        {completedTasks.map((task) => (
          <TaskComponent key={task.id} task={task} status="completed" />
        ))}
        <hr />
        <h3 className="filter-title">Canceled tasks</h3>
        {canceledTasks.map((task) => (
          <TaskComponent key={task.id} task={task} status="canceled" />
        ))}
      </div>
    </>
  );
};

export default Tasks;
