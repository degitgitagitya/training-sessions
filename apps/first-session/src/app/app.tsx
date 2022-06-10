import styled from '@emotion/styled';

import { Todo } from '@prosa-training/components';
import { SWRConfig } from 'swr';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <SWRConfig>
      <StyledApp>
        <h1>Hello World</h1>
        <Todo />
      </StyledApp>
    </SWRConfig>
  );
}

export default App;
