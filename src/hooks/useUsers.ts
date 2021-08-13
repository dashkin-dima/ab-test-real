import { getUsersApi, addUserApi } from 'api/users';
import { UsersContext } from 'context/Users';
import { createUniqId } from 'helpers';
import createUniqueId from 'helpers/createUniqId';
import { useContext, useEffect } from 'react';

const ERRORS_TYPES: { [key: string]: string } = {
  'Error: Network Error': 'run json server, scripts: npm run server',
  ERROR_HOOK: 'useGetUsers must be used within a UsersProvider',
};

const useUsers = () => {
  const context = useContext(UsersContext);
  if (context === undefined) {
    throw new Error(ERRORS_TYPES.ERROR_HOOK);
  }

  const {
    isPending, users, error, setPending, setUsers, setError,
  } = context;

  useEffect(() => {
    if (isPending) {
      setPending(false);
    }
  }, [users]);

  const fetchUsers = async () => {
    setPending(true);
    const users = await getUsersApi();
    if (users instanceof Error) {
      const error = users.toString();
      if (ERRORS_TYPES[error]) {
        setError(ERRORS_TYPES[error]);
      } else {
        setError(error);
      }
    } else {
      setUsers(users);
    }
  };
  const addUsers = async (args: { dateRegistration: string, dateLastActivity: string }) => {
    const { dateRegistration, dateLastActivity } = args;

    const response = await addUserApi({
      id: createUniqueId(),
      dateRegistration,
      dateLastActivity,
    });

    if (response instanceof Error) {
      setError(error);
      return;
    }

    if (response.status === 201) {
      setUsers((prev) => [...prev, response.data]);
    }
  };

  return {
    isPending, users, fetchUsers, addUsers, error,
  };
};

export default useUsers;
