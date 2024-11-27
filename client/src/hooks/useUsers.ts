import { useEffect, useState } from 'react';
import { fetchUsers } from '../services/userService';
import { processUsers } from '../utils/processUsers';

export const useUsers = () => {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const usersData = await fetchUsers();
        const processedUsers = processUsers(usersData);
        setUsers(processedUsers);
      } catch (error) {
        setError('Failed to fetch users');
        console.error(error);
      }
    };

    getUsers();
  }, []);

  return { users, error };
};