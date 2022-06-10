import useSWR from 'swr';

export function useProfile() {
  const { data, mutate } = useSWR<number>(`/api/profile`, async () => {
    return 1;
  });

  return { profile: data, setProfile: mutate };
}

export default useProfile;
