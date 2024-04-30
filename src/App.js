import React, { useState, useEffect } from 'react';
import './App.css';
import Board from './components/Board';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="h-screen w-full bg-neutral-900 text-neutral-50">
        <Board/>
    </div>
  );
}

export default App;
