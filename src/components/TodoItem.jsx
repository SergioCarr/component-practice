// src/components/TodoItem.jsx
import React from 'react';
import MyButton from './MyButton';

export default function TodoItem({ text, completed, onDelete, onToggleComplete }) {
  return (
    <div className="flex justify-between items-center p-2 border rounded my-1">
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
      </span>
      <div className="space-x-2">
        <MyButton
          label={completed ? 'Undo' : 'Done'}
          onClick={onToggleComplete}
          style={{ backgroundColor: completed ? 'gray' : 'green' }}
        />
        <MyButton
          label="Delete"
          onClick={onDelete}
          style={{ backgroundColor: 'red' }}
        />
      </div>
    </div>
  );
}
