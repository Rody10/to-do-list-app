import React, { useState } from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (text) => {
    if (editingTask !== null) {
      const updatedTasks = tasks.map((task) =>
        task.id === editingTask.id ? { ...task, text } : task
      );
      setTasks(updatedTasks);
      setEditingTask(null);
    } else {
      const newTask = {
        id: Date.now(),
        text,
        completed: false,
      };
      setTasks([newTask, ...tasks]);
    }
  };

  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const editTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setEditingTask(taskToEdit);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List App</h1>
      <TaskInput addTask={addTask} editingTask={editingTask} />
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
