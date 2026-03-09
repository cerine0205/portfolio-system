
import "./DeleteModal.css";

function DeleteModal({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
}) {
  if (!isOpen) return null;

  return (
    <div className="delete-modal-overlay" onClick={onCancel}>
      <div className="delete-modal-card" onClick={(e) => e.stopPropagation()}>
        <p className="delete-modal-kicker">Confirm.Delete</p>

        <h2 className="delete-modal-title">{title}</h2>

        <p className="delete-modal-message">{message}</p>

        <div className="delete-modal-actions">
          <button className="delete-modal-confirm" onClick={onConfirm}>
            Delete
          </button>

          <button className="delete-modal-cancel" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
