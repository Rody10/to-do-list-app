import React, { useState, useEffect } from 'react';

function TaskInput({ addTask, editingTask }) {
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    if (editingTask) {
      setInputText(editingTask.text);
    } else {
      setInputText('');
    }
  }, [editingTask]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      addTask(inputText);
      setInputText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={inputText}
        onChange={handleInputChange}
      />
      <button type="submit">{editingTask ? 'Update' : 'Add'}</button>
    </form>
  );
}

export default TaskInput;
