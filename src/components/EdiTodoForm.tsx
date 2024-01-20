import { useState } from "react";

type EdiTaskFormProps = {
  task: {
    id: string;
    task: string;
    completed: boolean;
  };
  editTodo: (task: string, id: string) => void;
  currentColor: string;
}

export const EdiTodoForm = ({ task, editTodo,  currentColor} : EdiTaskFormProps) => {
  const [value, setValue] = useState<string>(task.task);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    editTodo(value, task.id);
  };

  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className={`todoForm__input ${currentColor}--border`}
        value={value}
        placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className={`todoForm__btn ${currentColor}`}>
        Update Task
      </button>
    </form>
  );
};