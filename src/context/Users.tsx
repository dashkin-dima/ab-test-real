import React, { createContext, useState, ReactNode } from 'react';
import { userType } from 'typings/user';

type callbackSetUsers = (prevArrayUser: Array<userType>) => Array<userType>;

type ContextType = {
  isPending: boolean
  users: Array<userType>
  error: string | undefined
  setPending: (pending: boolean) => void
  setUsers: (arrayUser: Array<userType> | callbackSetUsers) => void
  setError: (error: string | undefined) => void
};

const UsersContext = createContext<ContextType | undefined>(undefined);

const UsersProvider = ({ children }: { children: ReactNode }) => {
  const [isPending, setPending] = useState<boolean>(true);
  const [users, setUsers] = useState<Array<userType>>([]);
  const [error, setError] = useState<string | undefined>();

  return (
    <UsersContext.Provider value={{
      isPending, users, setUsers, setPending, error, setError,
    }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export { UsersProvider, UsersContext };
