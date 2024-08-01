import { useEffect, useState } from "react";
import Task_ from "./components/Task";
import "./styles/styles.css";
import { FaPencilAlt } from "react-icons/fa";
import { MdOutlineEventNote } from "react-icons/md";

interface Task {
  task_content: string;
  isBeingEdited: boolean;
}

export default function App() {
  if (localStorage.getItem("tasks") == null) {
    const tasks: Task[] = [];
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  const [tasks, setTasks] = useState<Task[]>(
    JSON.parse(localStorage.getItem("tasks")!)
  );
  const [taskInput, setTaskInput] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleClick = () => {
    if (taskInput.length > 0) {
      const task: Task = {
        task_content: taskInput,
        isBeingEdited: false,
      };
      setTasks([...tasks, task]);
      setTaskInput("");
    }
  };
  return (
    <div className="app">
      <div className="heading">
        <FaPencilAlt className="heading-icons" />
        <h1>What To Do</h1>
        <MdOutlineEventNote className="heading-icons" />
      </div>
      <input
        type="text"
        name=""
        id=""
        value={taskInput}
        placeholder="Add a Task"
        onChange={(event) => {
          setTaskInput(event.target.value);
        }}
        className="task-input"
      />
      <button type="button" onClick={handleClick} className="add-btn">
        Add Todo
      </button>
      <div className="tasks">
        {tasks.map((task, index) => {
          return (
            <Task_
              task_content={task.task_content}
              isBeingEdited={task.isBeingEdited}
              setTasks={setTasks}
              tasks={tasks}
              key={index}
              idx={index}
            />
          );
        })}
      </div>
    </div>
  );
}
