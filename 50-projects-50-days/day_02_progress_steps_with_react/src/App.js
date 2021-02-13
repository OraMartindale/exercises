import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [currentActive, setCurrentActive] = useState(1);

  useEffect(
    () => {
      const progress = document.getElementById('progress');
      progress.style.width = `${(currentActive - 1) / 3 * 100}%`;
    },
    [currentActive]
  );

  return (
    <div className="container">
      <div className="progress-container">
        <div className="progress" id="progress"></div>
        <div className={`circle ${currentActive >= 1 ? "active" : ""}`}>1</div>
        <div className={`circle ${currentActive >= 2 ? "active" : ""}`}>2</div>
        <div className={`circle ${currentActive >= 3 ? "active" : ""}`}>3</div>
        <div className={`circle ${currentActive >= 4 ? "active" : ""}`}>4</div>
      </div>

      <button
        className="btn"
        disabled={currentActive==1}
        onClick={() => setCurrentActive(prevCount => prevCount - 1)}>
        Prev
      </button>
      <button
        className="btn"
        disabled={currentActive==4}
        onClick={() => setCurrentActive(prevCount => prevCount + 1)}>
        Next
      </button>
    </div>
  );
};

export default App;
