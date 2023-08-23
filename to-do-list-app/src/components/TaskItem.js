import React from 'react';

function TaskItem({ task, toggleComplete, editTask, deleteTask }) {
  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      <span
        className={task.completed ? 'completed' : ''}
        onClick={() => editTask(task.id)}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default TaskItem;
