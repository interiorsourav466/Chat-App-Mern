import ChatContainer from "../components/ChatContainer";
import NoChatSelected from "../components/NoChatSelected";
import Sidebar from "../components/Sidebar";
import { useChatStore } from "../store/useChatStore";

const Home = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      <div className="flex justify-center items-center h-full p-6">
        <div className="w-full max-w-7xl h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex h-full">
            <Sidebar />

            <div className="flex-1">
              {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
