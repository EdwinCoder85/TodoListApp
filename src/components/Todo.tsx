import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";

type Task = {
  task: {
    id: string;
    task: string;
    completed: boolean;
    dateTime: Date;
  };
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string) => void;
  currentColor: string;
};

export const Todo = ({
  task,
  toggleComplete,
  deleteTodo,
  editTodo,
  currentColor,
}: Task) => {

  const date = new Date(task.dateTime);
  const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'})


  return (
    <div
      className={`todo ${task.completed ? "todo--completed" : currentColor}`}
    >
      <div className="todo__record">
        <p
          onClick={() => toggleComplete(task.id)}
          className={`${
            task.completed ? "todo--completed" : "todo--incompleted"
          }`}
        >
          {task.task}
        </p>
        <span className="todo__record--date">
          registration date: {formattedDate}
        </span>
      </div>
      <div>
        <FontAwesomeIcon
          className="todo__edit"
          icon={faPencilAlt}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon
          className="todo__delete"
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};
