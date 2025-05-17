import TodoList from "../components/TodoList";
import useTodo from "../hooks/useTodo";
import PaginationPage from "../components/PaginationPage";
const TodoPage = () => {
  return (
    <PaginationPage
      useDataHook={useTodo}
      ListComponent={TodoList}
      itemPerPage={10}
    />
  );
};

export default TodoPage;
