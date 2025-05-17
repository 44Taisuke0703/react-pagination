import type { Todo } from "../model/todo";
import TodoCard from "./Todo";

const TodoList: React.FC<{ items: Todo[] }> = ({ items }) => {
  return (
    <>
      {items.map((todo) => (
        <TodoCard todo={todo} key={todo.id} /> // Use TodoCard component to render each todo
      ))}
    </>
  );
};

export default TodoList;
