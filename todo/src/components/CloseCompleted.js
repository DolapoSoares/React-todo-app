import React from 'react'

export default function CloseCompleted(props) {
  return (
    <div>
        <button
        type="button" 
        className="btn toggle-btn" 
        aria-pressed="true"
        onClick={() => props.completed && props.deleteCompleted(props.id)}
        >Close Completed</button>
    </div>
  )
}

