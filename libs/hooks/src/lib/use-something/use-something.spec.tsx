import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useSomething from './use-something';

describe('useSomething', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useSomething());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
