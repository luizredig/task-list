import "./Tasks.css";

import { Task } from "../../models/Task";
import TaskComponent from "../Task/Task";
import { useState } from "react";

const Tasks = () => {
  let [tasks, setTasks] = useState<Task[]>([
    {
      id: -1,
      description: "Example task",
      completed: false,
      canceled: false,
    },
  ]);

  let pendingTasks = tasks.filter((task) => {
    return !task.completed && !task.canceled;
  });
  let completedTasks = tasks.filter((task) => {
    return task.completed && !task.canceled;
  });
  let canceledTasks = tasks.filter((task) => {
    return task.canceled && !task.completed;
  });

  function handleCreateTask() {
    let input = document.getElementById("inputTask") as HTMLInputElement;
    let inputValue: string = input.value;
    let formatedValue: string = handleFormatterString(inputValue);
    if (formatedValue.length > 0) {
      let newTask: Task = new Task(formatedValue);
      setTasks([...tasks, newTask]);
    }
    input.value = "";
    input.focus();
  }

  function handleSetTasks(tasks: Task[]) {
    setTasks(tasks);
  }

  function capitalizeFirstLetter(str: string): string {
    return str.replace(/^\w/, (c) => c.toUpperCase());
  }

  function trimWhiteSpaces(str: string) {
    let array = str.split(" ");
    while (array[0] === "") {
      array.shift();
    }

    while (array[array.length - 1] === "") {
      array.pop();
    }

    let string = array.join(" ");

    return string;
  }

  function handleFormatterString(str: string): string {
    let newStr = trimWhiteSpaces(str);
    newStr = capitalizeFirstLetter(newStr);
    return newStr;
  }

  return (
    <>
      <div className="container">
        <h3 className="filter-title">New task</h3>
        <input type="text" id="inputTask" />
        <button className="create-button" onClick={handleCreateTask}>
          Create
        </button>
        <hr />
        <h3 className="filter-title">Pending tasks</h3>
        {pendingTasks.map((task) => (
          <TaskComponent
            key={task.id}
            task={task}
            handleSetTasks={handleSetTasks}
            handleFormatter={handleFormatterString}
            tasks={tasks}
          />
        ))}
        <hr />
        <h3 className="filter-title">Completed tasks</h3>
        {completedTasks.map((task) => (
          <TaskComponent
            key={task.id}
            task={task}
            status="completed"
            tasks={tasks}
          />
        ))}
        <hr />
        <h3 className="filter-title">Canceled tasks</h3>
        {canceledTasks.map((task) => (
          <TaskComponent
            key={task.id}
            task={task}
            status="canceled"
            tasks={tasks}
          />
        ))}
      </div>
    </>
  );
};

export default Tasks;
