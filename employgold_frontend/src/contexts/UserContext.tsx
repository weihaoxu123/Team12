import React, { useState, createContext } from 'react';

type UserContextProviderProps = {
  children: React.ReactNode;
};

type UserContextType = {
  userGroup: String | null;
  setUserGroup: React.Dispatch<React.SetStateAction<String | null>>;
};

export const UserContext = createContext<UserContextType | null>(null);

export default function UserContextProvider({
  children,
}: UserContextProviderProps) {
  const [userGroup, setUserGroup] = useState<String | null>('candidate');

  return (
    <UserContext.Provider value={{ userGroup, setUserGroup }}>
      {children}
    </UserContext.Provider>
  );
}
