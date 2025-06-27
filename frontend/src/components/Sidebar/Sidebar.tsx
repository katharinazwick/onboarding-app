import useUsers from "../../hooks/useUsers";
import UserCreation from "./UserCreation";
import UserList from "./UserList";

const Sidebar = () => {
  const { users, addUser } = useUsers();

  return (
    <section className="p-4 h-full flex flex-col bg-neutral-100 w-[200px] border-r-[1px] border-neutral-400">
      <h1 className="text-xl mb-6">openNotes</h1>
      <UserCreation addUser={addUser} />
      <hr className="my-4 border-neutral-400"></hr>
      <UserList users={users} />
    </section>
  );
};

export default Sidebar;
