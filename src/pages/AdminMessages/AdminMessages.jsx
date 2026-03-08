import { useEffect, useState } from "react";
import "./AdminMessages.css";
import { getMessages, deleteMessage, markMessageAsRead } from "../../api/messagesApi";

function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    loadMessages();
  }, []);

  async function loadMessages() {
    const data = await getMessages();
    setMessages(data);
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
      const updatedMessage = data.find(msg => msg.id === id);
      setSelectedMessage(updatedMessage);
    }
  }

  const total = messages.length;
  const unread = messages.filter(m => !m.is_read).length;
  const withProject = messages.filter(m => m.project).length;

  return (
    <div className="admin-messages">
      <h1 className="admin-title">Inbox</h1>
      <p className="admin-subtitle">{total} messages · {unread} unread</p>

      <div className="stats">
        <div className="stat-card">
          <h3>{total}</h3>
          <p>Total</p>
        </div>
        <div className="stat-card">
          <h3>{unread}</h3>
          <p>Unread</p>
        </div>
        <div className="stat-card">
          <h3>{withProject}</h3>
          <p>With Project</p>
        </div>
      </div>

      <div className={`messages-layout ${selectedMessage ? "split" : "single"}`}>
        <div className="messages-list">
          {messages.map(msg => (
            <div
              key={msg.id}
              className="message-card"
              onClick={() => setSelectedMessage(msg)}
            >
              <div className="message-header">
                <h3>{msg.name}</h3>
                {!msg.is_read && <span className="unread-dot"></span>}
              </div>

              <p className="message-subject">{msg.subject}</p>
              <p className="message-preview">
                {msg.content ? (msg.content.length > 80 ? `${msg.content.slice(0, 80)}...` : msg.content) : ""}
              </p>

              {msg.project && <p className="message-project">{msg.project.name}</p>}
            </div>
          ))}
        </div>

        {selectedMessage && (
          <div className="message-details">
            <h2>{selectedMessage.subject}</h2>
            <p><strong>Name:</strong> {selectedMessage.name}</p>
            <p><strong>Email:</strong> {selectedMessage.email}</p>
            <p><strong>Project:</strong> {selectedMessage.project?.name || "General"}</p>
            <p className="message-full">{selectedMessage.content}</p>

            <div className="actions">
              {!selectedMessage.is_read && (
                <button className="read" onClick={() => handleRead(selectedMessage.id)}>Mark as read</button>
              )}
              <button className="delete" onClick={() => handleDelete(selectedMessage.id)}>
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminMessages;