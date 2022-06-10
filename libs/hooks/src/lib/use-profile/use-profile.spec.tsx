import useProfile from './use-profile';

import { act, renderHook, waitFor } from '@testing-library/react';

describe('useProfile', () => {
  it('should render successfully', () => {
    waitFor(() => {
      const { result } = renderHook(() => useProfile());

      expect(result.current.profile).toBe(undefined);

      act(() => {
        result.current.setProfile(0);
      });

      expect(result.current.profile).toBe(0);
    });
  });
});
