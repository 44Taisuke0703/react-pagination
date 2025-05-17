import useSWR from "swr";
import { fetcher } from "../infra/fetch";
import type { Todo } from "../model/todo";
import type { TodoPagination } from "../type/todoPagination";

const useTodo = (itemOffset: number, itemPerPage: number) => {
  const { data: totalCount, isLoading: isLoadingTotalCount } = useSWR<{
    items: number;
  }>("/todo?_page=1", fetcher);
  const { data: todos, isLoading: isLoadingTodo } = useSWR<Todo[]>(
    `/todo?_start=${itemOffset}&_limit=${itemPerPage}`,
    fetcher
  );
  const isLoading = isLoadingTodo || isLoadingTotalCount;
  return {
    data: { todos: todos, totalCount: totalCount?.items } as TodoPagination,
    isLoading,
  };
};

export default useTodo;
