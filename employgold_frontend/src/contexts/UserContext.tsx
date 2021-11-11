import React, { useState, createContext } from 'react';

type UserContextProviderProps = {
  children: React.ReactNode;
};

type UserContextType = {
  userGroup: String;
  setUserGroup: React.Dispatch<React.SetStateAction<String>>;
};

export const UserContext = createContext<UserContextType | null>(null);

export default function UserContextProvider({
  children,
}: UserContextProviderProps) {
  const [userGroup, setUserGroup] = useState<String>('CANDIDATE');

  return (
    <UserContext.Provider value={{ userGroup, setUserGroup }}>
      {children}
    </UserContext.Provider>
  );
}
