import './AdminMessages.css';
import '../adminShared.css';

function MessageCard({ msg, setSelectedMessage }) {
  return (
    <div
      className="message-card admin-panel-card"
      onClick={() => setSelectedMessage(msg)}
    >

      <div className="message-header">
        <h3>{msg.name}</h3>

        {!msg.is_read && (
          <span className="unread-dot"></span>
        )}
      </div>

      <p className="message-subject">
        {msg.subject}
      </p>

      <p className="message-preview">
        {msg.content
          ? msg.content.length > 80
            ? `${msg.content.slice(0, 80)}...`
            : msg.content
          : ""}
      </p>

      {msg.project && (
        <p className="message-project">
          {msg.project.name}
        </p>
      )}

    </div>
  );
}

export default MessageCard;