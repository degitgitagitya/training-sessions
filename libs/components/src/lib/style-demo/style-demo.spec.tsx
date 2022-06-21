import { render } from '@testing-library/react';

import StyleDemo from './style-demo';

describe('StyleDemo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StyleDemo />);
    expect(baseElement).toBeTruthy();
  });
});
