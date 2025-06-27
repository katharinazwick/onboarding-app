import { useEffect, useState } from "react";
import { User } from "../types";
import { useSelectedUser } from "./useSelectedUser";
import { createNewUser, fetchUsers } from "../helpers/users";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const { setSelectedUser } = useSelectedUser();

  useEffect(() => {
    const loadUsers = async () => {
      fetchUsers()
        .then((fetchedUsers) => {
          setUsers(fetchedUsers);

          if (fetchedUsers.length > 0) {
            setSelectedUser(fetchedUsers[0]);
          }
        })
        .catch((error) => {
          setError(error);
        });
    };

    loadUsers();
  }, [setSelectedUser]);

  const addUser = async (name: string) => {
    createNewUser(name)
      .then((newUser) => {
        setUsers((prev) => [...prev, newUser]);
        setSelectedUser(newUser);
      })
      .catch((error) => setError(error));
  };

  if (error instanceof Error) {
    throw error;
  }

  return { users, addUser };
};

export default useUsers;
