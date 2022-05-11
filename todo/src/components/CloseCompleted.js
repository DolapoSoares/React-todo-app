import React from "react";

export default function CloseCompleted({ deleteTaskCompleted }) {
  return (
    <div>
      <button
        type="button"
        className="btn toggle-btn"
        aria-pressed="true"
        onClick={() => deleteTaskCompleted()}
      >
        Close Completed
      </button>
    </div>
  );
}
