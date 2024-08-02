import { useState } from "react";
import { FaEdit, FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";

export default function Task(props: {
  task_content: string;
  isBeingEdited: boolean;
  setTasks: (task: { task_content: string; isBeingEdited: boolean }[]) => void;
  tasks: {
    task_content: string;
    isBeingEdited: boolean;
  }[];
  idx: number;
}) {
  const [taskInput, setTaskInput] = useState(props.task_content);
  return (
    <div className="task-item">
      {props.isBeingEdited == true ? (
        <input
          type="text"
          name=""
          id=""
          value={taskInput}
          placeholder={props.task_content}
          onChange={(event) => {
            setTaskInput(event.target.value);
          }}
        />
      ) : (
        <p className="task-content">{props.task_content}</p>
      )}

      <div>
        <button
          className="edit-btn"
          onClick={() => {
            const modified: { task_content: string; isBeingEdited: boolean }[] =
              [];

            if (props.isBeingEdited) {
              props.tasks.forEach((task, index) => {
                if (index == props.idx) {
                  const newTask: {
                    task_content: string;
                    isBeingEdited: boolean;
                  } = { task_content: taskInput, isBeingEdited: false };
                  modified.push(newTask);
                } else {
                  modified.push(task);
                }
              });
            } else {
              props.tasks.forEach((task, index) => {
                if (index == props.idx) {
                  const newTask: {
                    task_content: string;
                    isBeingEdited: boolean;
                  } = { task_content: props.task_content, isBeingEdited: true };
                  modified.push(newTask);
                } else {
                  modified.push(task);
                }
              });
            }
            props.setTasks(modified);
          }}
        >
          {props.isBeingEdited ? <FaCheck /> : <FaEdit />}
        </button>
        <button
          className="delete-btn"
          onClick={() => {
            if (props.isBeingEdited) {
              console.log("MTA");
              const modified: {
                task_content: string;
                isBeingEdited: boolean;
              }[] = [];
              props.tasks.forEach((task, index) => {
                if (index == props.idx) {
                  const newTask: {
                    task_content: string;
                    isBeingEdited: boolean;
                  } = {
                    task_content: props.task_content,
                    isBeingEdited: false,
                  };
                  modified.push(newTask);
                } else {
                  modified.push(task);
                }
              });
              props.setTasks(modified);
            } else {
              const newTasks = props.tasks.filter((_task, index) => {
                return index != props.idx;
              });
              props.setTasks(newTasks);
            }
          }}
        >
          {props.isBeingEdited ? <ImCancelCircle /> : <MdDelete />}
        </button>
      </div>
    </div>
  );
}
