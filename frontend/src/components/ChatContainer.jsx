import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";
import ChatHeader from "./ChatHeader";
import MessageSkeleton from "./MessageSkeleton";
import MessageInput from "./MessageInput";
import { formatMessageTime } from "../lib/utils";
import { useRef } from "react";

const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);
  useEffect(() => {
    getMessages(selectedUser._id);

    subscribeToMessages();
    return () => unsubscribeFromMessages();
  }, [
    selectedUser._id,
    getMessages,
    subscribeToMessages,
    unsubscribeFromMessages,
  ]);
  useEffect(() => {
    if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (isMessagesLoading)
    return (
      <div className="flex-1 flex flex-col oveflow-auto">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  return (
    <div className="flex-1 flex flex-col bg-gray-50">

  <ChatHeader />

  <div className="flex-1 overflow-y-auto p-6 space-y-4">

    {messages.map((message) => (

      <div
        key={message._id}

        className={`flex
          ${message.senderId === authUser._id
            ? "justify-end"
            : "justify-start"}
        `}
      >

        <div
          className={`max-w-xs p-3 rounded-2xl shadow

          ${message.senderId === authUser._id

            ? "bg-indigo-600 text-white rounded-br-none"

            : "bg-white rounded-bl-none"

          }`}
        >

          {message.image && (

            <img
              src={message.image}
              className="rounded mb-2"
            />

          )}

          {message.text}

          <div className="text-xs opacity-60 mt-1">

            {formatMessageTime(message.createdAt)}

          </div>

        </div>

      </div>

    ))}

  </div>

  <MessageInput />

</div>
  );
};
export default ChatContainer;
