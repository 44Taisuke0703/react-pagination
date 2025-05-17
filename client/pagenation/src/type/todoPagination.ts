import type { Todo } from "../model/todo";
export type TodoPagination = {
    totalCount: number;
    todos: Todo[];
};
