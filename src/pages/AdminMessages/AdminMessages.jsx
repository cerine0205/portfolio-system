import { useEffect, useState } from "react";
import "./AdminMessages.css";
import "../adminShared.css";
import {
  getMessages,
  deleteMessage,
  markMessageAsRead
} from "../../api/messagesApi";
import MessageList from "./MessageList";
import MessageDetails from "./MessageDetails";
import MessageStats from "./MessageStats";
import DeleteModal from "../DeleteModal/DeleteModal";

function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [messageToDelete, setMessageToDelete] = useState(null);

  useEffect(() => {
    loadMessages();
  }, []);

  async function loadMessages() {
    const data = await getMessages();
    setMessages(data);
    return data;
  }

  function handleDelete(id) {
    setMessageToDelete(id);
  }

  async function confirmDelete() {
    if (!messageToDelete) return;

    await deleteMessage(messageToDelete);
    await loadMessages();

    if (selectedMessage?.id === messageToDelete) {
      setSelectedMessage(null);
    }

    setMessageToDelete(null);
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
    <div className="admin-page admin-messages">
      <div className="admin-messages-top admin-panel-top">
        <div>
          <p className="admin-panel-kicker">
            admin / messages
          </p>

          <h1 className="admin-title admin-panel-title">
            Inbox
          </h1>

          <p className="admin-subtitle admin-panel-subtitle">
            {total} messages · {unread} unread
          </p>
        </div>
      </div>

      <div className="admin-stats">
        <MessageStats value={total} label="Total" />
        <MessageStats value={unread} label="Unread" />
        <MessageStats value={withProject} label="With Project" />
      </div>

      <div className={`messages-layout ${selectedMessage ? "split" : "single"}`}>
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

      {messageToDelete && (
        <DeleteModal
          isOpen={messageToDelete}
          title="Delete Message?"
          message={`Are you sure you want to delete "${
            messages.find((msg) => msg.id === messageToDelete)?.subject ||
            "this message"
          }"?`}
          onConfirm={confirmDelete}
          onCancel={() => setMessageToDelete(null)}
        />
      )}
    </div>
  );
}

export default AdminMessages;