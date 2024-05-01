import React, { useState, useEffect } from 'react';
import './App.css';
import Board from './components/Board';

function App() {

  return (
    <div className="h-screen w-full font-dm bg-black text-neutral-50 overflow-y-auto overscroll-none">
        <Board/>
    </div>
  );
}

export default App;
