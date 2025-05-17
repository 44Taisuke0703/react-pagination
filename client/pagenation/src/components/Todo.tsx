import type { Todo } from "../model/todo";

const TodoCard: React.FC<{ todo: Todo }> = ({ todo }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{todo.title}</h4>
          <p className="card-text">{todo.userId}</p>
        </div>
      </div>
    </>
  );
};

export default TodoCard;
