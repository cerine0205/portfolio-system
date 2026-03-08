import { useEffect, useState } from "react";
import "./AdminMessages.css";
import {
  getMessages,
  deleteMessage,
  markMessageAsRead
} from "../../api/messagesApi";

import MessageList from "./MessageList/MessageList";
import MessageDetails from "./MessageDetails/MessageDetails";
import MessageStats from "./MessageStats/MessageStats";


function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    loadMessages();
  }, []);

  async function loadMessages() {
    const data = await getMessages();
    setMessages(data);
    return data;
  }

  async function handleDelete(id) {
    await deleteMessage(id);
    await loadMessages();

    if (selectedMessage?.id === id) {
      setSelectedMessage(null);
    }
  }

  async function handleRead(id) {
    await markMessageAsRead(id);
    const data = await loadMessages();

    if (selectedMessage?.id === id) {
      const updatedMessage = data.find((msg) => msg.id === id);
      setSelectedMessage(updatedMessage);
    }
  }

  const total = messages.length;
  const unread = messages.filter((m) => !m.is_read).length;
  const withProject = messages.filter((m) => m.project).length;

  return (
    <div className="admin-messages">
      <h1 className="admin-title">Inbox</h1>
      <p className="admin-subtitle">
        {total} messages · {unread} unread
      </p>

      <div className="stats">
        <MessageStats value={total} label="Total" />
        <MessageStats value={unread} label="Unread" />
        <MessageStats value={withProject} label="With Project" />
      </div>

      <div
        className={`messages-layout ${
          selectedMessage ? "split" : "single"
        }`}
      >
        <MessageList
          messages={messages}
          setSelectedMessage={setSelectedMessage}
        />

        {selectedMessage && (
          <MessageDetails
            selectedMessage={selectedMessage}
            handleRead={handleRead}
            handleDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
}

export default AdminMessages;