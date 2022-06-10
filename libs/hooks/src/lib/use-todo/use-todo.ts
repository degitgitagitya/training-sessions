import useSWR from 'swr';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface UseTodoProps {
  id: number | undefined;
}

export function useTodo({ id }: UseTodoProps) {
  const { data, mutate } = useSWR<Todo[]>(
    id ? `/api/todo/${id}` : null,
    async () => {
      const result = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      return result.json();
    }
  );

  return { todos: data, setTodos: mutate };
}

export default useTodo;
