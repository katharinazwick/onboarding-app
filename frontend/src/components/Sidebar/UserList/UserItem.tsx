import { useSelectedUser } from "../../../hooks/useSelectedUser";
import { User } from "../../../types";

interface UserItemProps {
  user: User;
}

const UserItem = ({ user }: UserItemProps) => {
  const { selectedUser, setSelectedUser } = useSelectedUser();
  const selectedUserClass =
    selectedUser?.id === user.id
      ? "bg-neutral-focus text-neutral-50"
      : "hover:bg-neutral-300";
  const userClass =
    "mx-auto w-full text-left text-sm px-4 py-1 rounded-md cursor-pointer " +
    selectedUserClass;

  return (
    <button onClick={() => setSelectedUser(user)} className={userClass}>
      {user.name}
    </button>
  );
};

export default UserItem;
