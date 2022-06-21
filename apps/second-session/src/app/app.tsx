import styled from '@emotion/styled';
import NxWelcome from './nx-welcome';

import { StyleDemo } from '@prosa-training/components';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <NxWelcome title="inline styling vs not-inline styling" />
      <StyleDemo />
    </StyledApp>
  );
}

export default App;
