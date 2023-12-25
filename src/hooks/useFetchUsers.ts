import { fetchUsers } from '../lib/fetchUsers';
import { User } from '../models/User';
import { useEffect, useState } from 'react';

export const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const abortController = new AbortController();

    fetchUsers(abortController).then((users) => setUsers(users));

    return () => {
      abortController.abort();
    };
  }, []);

  return { users };
};
