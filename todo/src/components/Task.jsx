export function Task({ task, onDelete, onEdit }) {
  return (
    <div className="task-card">
      <p className="task-text">{task.text}</p>
      <div className="task-actions">
        <button className="delete-btn" onClick={onDelete}>
          🗑
        </button>
        <button className="edit-btn" onClick={onEdit}>
          ✏️
        </button>
      </div>
    </div>
  );
}
