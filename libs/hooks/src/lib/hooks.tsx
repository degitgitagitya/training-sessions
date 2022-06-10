import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface HooksProps {}

const StyledHooks = styled.div`
  color: pink;
`;

export function Hooks(props: HooksProps) {
  return (
    <StyledHooks>
      <h1>Welcome to Hooks!</h1>
    </StyledHooks>
  );
}

export default Hooks;
