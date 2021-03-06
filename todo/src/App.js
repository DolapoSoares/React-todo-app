import React , { useState } from 'react'
import Todo from './components/Todo'
import Form from "./components/Form";
import Footer from "./components/Footer"
import FilterButton from './components/FilterButton';
import Header from './components/Header'
import { nanoid } from "nanoid";

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed,
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

  console.log(tasks)

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

  function deleteTaskCompleted() {
    const completedValue = tasks.filter(task => task.completed === false);
    setData(completedValue);
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
     isPressed={name === filter}
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
    <Header />
    <Form addTask={addTask} />
    <div className="filters btn-group stack-exception">
    <ul
      role="list"
      className="todo-list stack-large stack-exception"
      aria-labelledby="list-heading"
    >
    {taskList}
    </ul>
    </div>
    <Footer setFilter={setFilter} headingText={headingText} filterList={filterList} deleteTaskCompleted={deleteTaskCompleted} tasks={tasks}/>
     </div>
  )
}

export default App
