import React from 'react';
import './Actor.css';

const Actor = () => {
  return (
    <div className="cast_member">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiYlOKImOv-lLnsoF6qsYkWt1gL-mys7w5CXz8qcspregJlOERf2FvS6Y&s=0" />
      <div className="cast_and_character">
        <p>Actor Name</p>
        <p className="cast_character_name">Character Name</p>
      </div>
    </div>
  );
};

export default Actor;
