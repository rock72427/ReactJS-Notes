import { useState } from "react";

export function TaskModal({ task, onSave, onClose }) {
  const [text, setText] = useState(task.text);

  return (
    <div className="modal-overlay">
      <div className="modal-El">
        <h2>Edit Your Task</h2>
        <input
          type="text"
          className="modal-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="modal-actions">
          <button className="save-btn" onClick={() => onSave(text)}>
            UPDATE TASK
          </button>
          <button className="close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
