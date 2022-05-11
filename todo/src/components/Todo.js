import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Draggable from 'react-draggable';

export default function Todo(props) {
    return (
    <Draggable>
         <li className="todo stack-small">
        <div className="c-cb">
          <input
          id={props.id} 
          type="checkbox" 
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)} 
          />
          <label className="todo-label" htmlFor={props.id}>
            <span className={props.completed ? "completed" : ""}>{props.name}</span>
          </label>
        </div>
        <div className="btn-group">
          <button type="button" className="btn" onClick={() => props.deleteTask(props.id)}>
          <DeleteIcon /> 
          </button>
        </div>
      </li>
    </Draggable>
     
    );
  }
