import React , { useState } from 'react'
import Todo from './components/Todo'
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { nanoid } from "nanoid";

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App() {

  const data = [
    { id: "todo1", name: "Eat", completed: true },
    { id: "todo2", name: "Sleep", completed: false },
    { id: "todo3", name: "Repeat", completed: false }
  ];

  const [tasks, setData] = useState(data);
  const [filter, setFilter] = useState('All');

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setData(updatedTasks)
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setData(remainingTasks)
  }

  const taskList = tasks.filter(FILTER_MAP[filter]).map(task => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
   ))
   const filterList = FILTER_NAMES.map(name => (
    <FilterButton
     key={name} 
     name={name}
     setFilter={setFilter}
     />
  ));
  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

   function addTask(name) {
    const newTask = { id: "todo" + nanoid(), name: name, completed: false };
    setData([...tasks, newTask]);
  }

  return (
    <div className="todoapp stack-large">
    <h1>Todo</h1>
    <Form addTask={addTask} />
    <div className="filters btn-group stack-exception">
    <ul
      role="list"
      className="todo-list stack-large stack-exception"
      aria-labelledby="list-heading"
    >
    {taskList}
    </ul>
       <div className="filters btn-group stack-exception">
        {filterList}
      </div>
    <h2 id="list-heading">
      {headingText}
    </h2>
  </div>
  </div>
  )
}

export default App
