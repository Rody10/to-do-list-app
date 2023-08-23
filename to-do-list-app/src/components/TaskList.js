import React from 'react';
import TaskItem from './TaskItem';
import CompletedTaskList from './CompletedTaskList';

function TaskList({ tasks, toggleComplete, editTask, deleteTask }) {
  const incompleteTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="task-list">
      <div className="incomplete-task-list">
        {incompleteTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
      {completedTasks.length > 0 && (
        <CompletedTaskList
          completedTasks={completedTasks}
          toggleComplete={toggleComplete}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      )}
    </div>
  );
}

export default TaskList;
