import { createContext } from "react";
import { User } from "../types";

interface SelectedUserContextType {
  selectedUser: User | null;
  setSelectedUser: (user: User) => void;
}

const SelectedUserContext = createContext<SelectedUserContextType | null>(null);

export default SelectedUserContext;
