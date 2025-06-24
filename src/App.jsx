// src/App.jsx
import React, { useState } from 'react';
import TodoItem from './components/TodoItem';
import MyButton from './components/MyButton';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (!newTask.trim()) return;
    setTodos([...todos, { text: newTask, completed: false }]);
    setNewTask('');
  };
  
  const deleteTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };
  
  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };
  
  return (
    <div className="max-w-sm mx-auto p-4">
      <h1 className="text-2xl font-bold">To-Do List</h1>
      <div className="flex space-x-2 mt-3">
        <input
          className="border rounded p-2 flex-1 h-12"
          value={newTask}
          placeholder="Add a new task..."
          onChange={(e) => setNewTask(e.target.value)}
        />
        <MyButton
          label="Add"
          style={{ backgroundColor: 'blue' }}
          onClick={addTask}
        />
      </div>
      <div className="mt-4">
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <TodoItem
              key={index}
              text={todo.text}
              completed={todo.completed}
              onDelete={() => deleteTask(index)}
              onToggleComplete={() => toggleComplete(index)}
            />
          ))
        ) : (
          <p>No tasks yet. Add one above!</p>
        )}
      </div>
    </div>
  );
}