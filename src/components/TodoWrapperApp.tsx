import { useState, useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { EdiTodoForm } from "./EdiTodoForm";
import { ColorPalette } from "./ColorPalette";

interface TodoItem {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
  dateTime: Date;
}

export const TodoWrapperApp: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    const savedTodos: TodoItem[] = JSON.parse(
      localStorage.getItem("todos") || "[]"
    );
    setTodos(savedTodos);
  }, []);
  
  const addTodo = (todo: string): void => {
    const newTodos: TodoItem[] = [
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false, dateTime: new Date()},
    ];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const toggleComplete = (id: string): void => {
    const newTodos: TodoItem[] = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const deleteTodo = (id: string): void => {
    const newTodos: TodoItem[] = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const editTodo = (id: string): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task: string, id: string): void => {
    const newTodos: TodoItem[] = todos.map((todo) =>
      todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const getColor = () => {
    const selectedBackground = localStorage.getItem("body-background");
    if (selectedBackground) {
      return selectedBackground;
    } else {
      return "violet";
    }
  };

  // Estado para almacenar el color actual
  const [currentColor, setCurrentColor] = useState(getColor());

  // Actualiza el color de fondo del body
  document.body.className = currentColor;

  // Manejador de clic para los botones de colores
  const handleColorClick = (color: string) => {
    setCurrentColor(color);
  };

  useEffect(() => {
    localStorage.setItem("body-background", currentColor);
  }, [currentColor]);

  return (
    <div className="todo__container">
      <ColorPalette handleColorClick={handleColorClick} />
      <div className="todo__wrapper">
        <h1>Get Things Done!</h1>
        <TodoForm addTodo={addTodo} currentColor={currentColor} />
        {todos?.map((todo) =>
          todo.isEditing ? (
            <EdiTodoForm key={todo.id} editTodo={editTask} task={todo} currentColor={currentColor} />
          ) : (
            <Todo
              key={todo.id}
              task={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              currentColor={currentColor}
            />
          )
        )}
      </div>
    </div>
  );
};
