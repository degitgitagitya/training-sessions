import styled from '@emotion/styled';

import { useProfile, useTodo } from '@prosa-training/hooks';

const StyledTodo = styled.div`
  color: pink;
`;

export function Todo() {
  const { profile, setProfile } = useProfile();
  const { todos, setTodos } = useTodo({
    id: profile,
  });

  console.log(profile);

  return (
    <StyledTodo>
      <h1>Welcome to profile number {profile}!</h1>
      <h3>Here's your todo</h3>
      {JSON.stringify(todos, null, 2)}

      <hr />

      <button
        onClick={() =>
          setTodos([], {
            revalidate: false,
          })
        }
      >
        Empty out todo
      </button>

      <hr />

      <button onClick={() => setTodos()}>Refetch</button>

      <hr />

      <button
        onClick={() =>
          setProfile(2, {
            revalidate: false,
          })
        }
      >
        Set Profile to 2
      </button>

      <hr />

      <button onClick={() => setProfile()}>Reset Profile</button>
    </StyledTodo>
  );
}

export default Todo;
