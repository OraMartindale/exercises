import React, { useState, useEffect } from 'react';
import './FollowerCounter.css';

const FollowerCounter = ({ socialNetwork, followers, followerWord }) => {
  const [counter, setCounter] = useState(0);

  const updateCounter = () => {
    const increment = followers / 200;

    setCounter(currentValue => {
      if (currentValue < followers) {
        return Math.ceil(currentValue + increment);
      }
      return followers;
    });
  };

  useEffect(
    () => {
      const id = setInterval(updateCounter, 1);
      return function () {
        clearInterval(id);
      }
    },
    [setCounter]
  );

  return (
    <div className="counter-container">
      <i className={`fab fa-${socialNetwork.toLowerCase()} fa-3x`}></i>
      <div className="counter">{counter}</div>
      <span>{socialNetwork} {followerWord}</span>
    </div>
  );
}

export default FollowerCounter;
