import "./MessageList.css";
import MessageCard from "../MessageCard/MessageCard";

function MessageList({ messages, setSelectedMessage }) {
  return (
    <div className="messages-list">
      {messages.map((msg) => (
        <MessageCard
          key={msg.id}
          msg={msg}
          setSelectedMessage={setSelectedMessage}
        />
      ))}
    </div>
  );
}

export default MessageList;