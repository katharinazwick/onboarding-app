import { User } from "../../../types";
import UserItem from "./UserItem";

interface UserListProps {
  users: User[];
}

const UserList = ({ users }: UserListProps) => {
  return (
    <div className="flex flex-col gap-2 overflow-y-auto relative">
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
