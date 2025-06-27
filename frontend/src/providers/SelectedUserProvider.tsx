import { ReactNode, useState } from "react";
import SelectedUserContext from "../contexts/SelectedUserContext";
import { User } from "../types";

export const SelectedUserProvider = ({ children }: { children: ReactNode }) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <SelectedUserContext.Provider value={{ selectedUser, setSelectedUser }}>
      {children}
    </SelectedUserContext.Provider>
  );
};
