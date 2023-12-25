import { User } from '../models/User';

export const fetchUsers = async (
  abortController: AbortController
): Promise<User[]> => {
  const usersResponse = await fetch(
    'https://jsonplaceholder.typicode.com/users',
    {
      signal: abortController.signal,
    }
  );
  return usersResponse.json() as unknown as User[];
};
