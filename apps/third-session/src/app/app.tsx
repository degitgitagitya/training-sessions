import styled from '@emotion/styled';

import useSWR, { useSWRConfig } from 'swr';

const StyledApp = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

// DATA FETCHING LIBRARY
// + Declarative data fetching
// + Automatic caching (reduce over-fetching)
// + On demand revalidation
// + Redux is dead (state management is dead :D)

export function App() {
  return (
    <StyledApp>
      <div style={{ background: 'red', flexGrow: 1, padding: '1rem' }}>
        <Profile />
      </div>

      <div style={{ background: 'green', flexGrow: 1, padding: '1rem' }}>
        <ProfileSummary />
      </div>

      <div style={{ background: 'blue', flexGrow: 1, padding: '1rem' }}>
        <ProfileDetails />
      </div>
    </StyledApp>
  );
}

const Profile = () => {
  const { data, error, mutate } = useSWR('/todos/1', () =>
    fetch('https://jsonplaceholder.typicode.com/todos/1').then((r) => r.json())
  );

  const removeData = () => {
    mutate(undefined, {
      revalidate: false,
    });
  };

  if (error) return <div>failed to load</div>;

  return (
    <div>
      <button onClick={removeData}>Remove data</button>
      {data?.title}
    </div>
  );
};

const ProfileSummary = () => {
  const { data, error } = useSWR('/todos/1', () =>
    fetch('https://jsonplaceholder.typicode.com/todos/1').then((r) => r.json())
  );

  if (error) return <div>failed to load</div>;

  return <div>{data?.title}</div>;
};

const ProfileDetails = () => {
  const { mutate } = useSWRConfig();

  const updateCache = () => {
    mutate(
      '/todos/1',
      fetch('https://jsonplaceholder.typicode.com/todos/2').then((r) =>
        r.json()
      ),
      {
        revalidate: false,
      }
    );
  };

  return <button onClick={updateCache}>Update All Cache</button>;
};

export default App;
