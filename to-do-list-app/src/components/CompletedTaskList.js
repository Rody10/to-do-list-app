import React from 'react';
import TaskItem from './TaskItem';

function CompletedTaskList({ completedTasks, toggleComplete, editTask, deleteTask }) {
  return (
    <div className="completed-task-list">
      <h2>Completed Tasks</h2>
      {completedTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default CompletedTaskList;
