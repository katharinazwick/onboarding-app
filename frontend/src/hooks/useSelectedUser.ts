import { useContext } from "react";
import SelectedUserContext from "../contexts/SelectedUserContext";

export const useSelectedUser = () => {
  const context = useContext(SelectedUserContext);
  if (!context) {
    throw new Error("useSelectedUser must be used within a SelectedUserProvider");
  }
  return context;
};
