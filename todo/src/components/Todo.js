import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Draggable from 'react-draggable';

export default function Todo(props) {
    return (
    <Draggable>
    <div className="todolist-container">
        <div className="todos-container">
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
                
                <button type="button" className="btn" onClick={() => props.deleteTask(props.id)}>
                <DeleteIcon /> 
                </button>
                
                </div>
            </li>
        </div>
     </div>
     </Draggable>
    );
  }
