import { useState } from "react";
import { Modal } from "./Modal";

type TaskFormProps = {
  addTodo: (todo: string) => void;
  currentColor: string;
}

export const TodoForm = ({ addTodo, currentColor } : TaskFormProps) => {
  const [value, setValue] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (value) {
      addTodo(value);
      setValue("");
    } else {
      setShowModal(!showModal);
    }
  };

  return (
    <>
      <form className="todoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className={`todoForm__input ${currentColor}--border`}
          value={value}
          placeholder="What is the task today?"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className={`todoForm__btn ${currentColor}`}>
          Add Task
        </button>
      </form>
      {showModal && <Modal currentColor={currentColor} setToggleModal={() => setShowModal(!showModal)} />}
    </>
  );
};