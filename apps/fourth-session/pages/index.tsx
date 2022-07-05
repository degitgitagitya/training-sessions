import styled from '@emotion/styled';
import useSWR from 'swr';

import { NextPage } from 'next';

const StyledPage = styled.div`
  .page {
  }
`;

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
  const serverData = await res.json();

  return {
    props: { staticData: { ...serverData, random: Math.random() } },
    revalidate: 10,
  };
};

const Index: NextPage<any> = ({ staticData }) => {
  const { data } = useSWR('https://jsonplaceholder.typicode.com/todos/1', () =>
    fetch('https://jsonplaceholder.typicode.com/todos/1').then((r) => r.json())
  );

  console.log(data, 'Client Data');

  console.log(staticData, 'Static Data');

  return (
    <StyledPage>
      <h1>Title: {data?.title}</h1>
    </StyledPage>
  );
};

export default Index;
