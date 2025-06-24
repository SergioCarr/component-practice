// src/components/MyButton.jsx
import React from 'react';

export default function MyButton({ label, onClick, style }) {
  return (
    <button
      style={style}
      onClick={onClick}
      className="px-3 py-1 rounded text-white"
    >
      {label}
    </button>
  );
}
