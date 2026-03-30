import { Users } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";
import SidebarSkeleton from "./SidebarSkeleton";
import { useEffect } from "react";

const Sidebar = () => {
  const { selectedUser, setSelectedUser, users, getUsers, isUsersLoading } =
    useChatStore();

  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if (isUsersLoading) return <SidebarSkeleton />;
  return (
   <aside className="h-full w-20 lg:w-80 bg-white shadow-lg flex flex-col">

  <div className="p-5 border-b">
    <h2 className="text-lg font-semibold text-gray-700">
      Chats
    </h2>
  </div>

  <div className="overflow-y-auto">

    {users.map((user) => (

      <button
        key={user._id}
        onClick={() => setSelectedUser(user)}

        className={`w-full flex items-center gap-3 p-3 hover:bg-indigo-50 transition

        ${selectedUser?._id === user._id
            ? "bg-indigo-100"
            : ""
        }`}
      >

        <div className="relative">

          <img
            src={
              user.profilePic ||
              "https://i.pravatar.cc/150"
            }

            className="w-12 h-12 rounded-full object-cover border"
          />

          {onlineUsers.includes(user._id) && (
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
          )}

        </div>

        <div className="hidden lg:block text-left">

          <p className="font-medium text-gray-800">
            {user.name}
          </p>

          <p className="text-sm text-gray-400">
            {onlineUsers.includes(user._id)
              ? "online"
              : "offline"}
          </p>

        </div>

      </button>

    ))}

  </div>

</aside>
  );
};
export default Sidebar;
