import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface StyleDemoProps {}

const StyledStyleDemo = styled.div`
  color: pink;
`;

// Inline
// - post processing yang di handle oleh lib nya
// - lebih modern (component based)
// - lebih efisien (mempercepat proses rendering)

// Not inline
// - setiap component ter declare css nya
// - harus ada post processing di css nya masing masing
// - lebih sulit saat refactoring (masih banyak leftover)

// css/
// - table.css
// - table-old.css
// - table-new.css

// css harusnya 10kb
// css -> 1mb

export function StyleDemo(props: StyleDemoProps) {
  return (
    <StyledStyleDemo>
      <h1
        style={{
          color: 'red',
        }}
        className="sub-title"
      >
        Welcome to StyleDemo!
      </h1>
    </StyledStyleDemo>
  );
}

export default StyleDemo;
