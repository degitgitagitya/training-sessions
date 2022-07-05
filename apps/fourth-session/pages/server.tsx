import styled from '@emotion/styled';
import useSWR from 'swr';

import { NextPage } from 'next';

const StyledPage = styled.div`
  .page {
  }
`;

export const getServerSideProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
  const serverData = await res.json();

  return { props: { serverData: { ...serverData, random: Math.random() } } };
};

const Server: NextPage<any> = ({ serverData }) => {
  const { data } = useSWR('https://jsonplaceholder.typicode.com/todos/1', () =>
    fetch('https://jsonplaceholder.typicode.com/todos/1').then((r) => r.json())
  );

  console.log(data, 'Client Data');

  console.log(serverData, 'Server Data');

  return (
    <StyledPage>
      <h1>Title: {data?.title}</h1>
    </StyledPage>
  );
};

export default Server;
