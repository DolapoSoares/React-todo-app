import React from 'react'
import Todo from './components/Todo'

function App() {

  const data = [
    { id: "todo1", name: "Eat", completed: true },
    { id: "todo2", name: "Sleep", completed: false },
    { id: "todo3", name: "Repeat", completed: false }
  ];

  const taskList = data.map(task => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
   ))
  return (
    <div className="todoapp stack-large">
    <h1>Todo</h1>
    <form>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
    <div className="filters btn-group stack-exception">
    <ul
      role="list"
      className="todo-list stack-large stack-exception"
      aria-labelledby="list-heading"
    >
    {taskList}
    </ul>
    <button type="button" className="btn toggle-btn" aria-pressed="true">
        <span>All</span>
      </button>
      <button type="button" className="btn toggle-btn" aria-pressed="false">
        <span>Active</span>
      </button>
      <button type="button" className="btn toggle-btn" aria-pressed="false">
        <span>Completed</span>
      </button>
      <button type="button" className="btn toggle-btn" aria-pressed="false">
        <span>Clear Completed</span>
      </button>
    </div>
    <h2 id="list-heading">
      3 tasks remaining
    </h2>
  </div>
  )
}

export default App
