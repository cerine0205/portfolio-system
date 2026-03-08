import "./MessageDetails.css";

function MessageDetails({
  selectedMessage,
  handleRead,
  handleDelete
}) {
  return (
    <div className="message-details">
      <h2>{selectedMessage.subject}</h2>

      <p>
        <strong>Name:</strong> {selectedMessage.name}
      </p>

      <p>
        <strong>Email:</strong> {selectedMessage.email}
      </p>

      <p>
        <strong>Project:</strong>{" "}
        {selectedMessage.project?.name || "General"}
      </p>

      <p className="message-full">
        {selectedMessage.content}
      </p>

      <div className="actions">
        {!selectedMessage.is_read && (
          <button
            className="read"
            onClick={() => handleRead(selectedMessage.id)}
          >
            Mark as read
          </button>
        )}

        <button
          className="delete"
          onClick={() => handleDelete(selectedMessage.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default MessageDetails;