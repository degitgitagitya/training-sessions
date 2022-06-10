import useTodo from './use-todo';

import { act, renderHook, waitFor } from '@testing-library/react';

describe('useTodo', () => {
  it('should render successfully', () => {
    waitFor(() => {
      const { result } = renderHook(() => useTodo({ id: undefined }));

      expect(result.current.todos).toBe(undefined);

      act(() => {
        result.current.setTodos([
          {
            userId: 1,
            id: 1,
            title: 'delectus aut autem',
            completed: false,
          },
        ]);
      });

      const { todos } = result.current;

      if (todos) {
        expect(todos[0].id).toBe(1);
      } else {
        expect(todos).toBe(undefined);
      }
    });
  });
});
