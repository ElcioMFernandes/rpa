import UserProps from '../interfaces/UserProps';

export const processUsers = (users: any[]): UserProps[] => {
  return users.map(user => {
    if (!user.id || !user.name) {
      throw new Error('Invalid user data');
    }
    return {
      id: user.id,
      name: user.name,
    };
  });
};