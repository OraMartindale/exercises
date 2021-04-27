import { useState } from 'react';
import marked from 'marked';
import './Note.css';

const Note = ({ text='', id, onDeleteNote, onTextUpdate}) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditor = () => {
    setIsEditing(prevValue => !prevValue);
  };

  return (
    <div className="note">
      <div className="tools">
        <button className="edit" onClick={toggleEditor}>
          <i className="fas fa-edit"></i>
        </button>
        <button className="delete" onClick={() => onDeleteNote(id)}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>

      <div className={isEditing ? 'main hidden' : 'main'} dangerouslySetInnerHTML={{__html: marked(text)}}></div>
      <textarea className={isEditing ? '' : 'hidden'} onChange={event => onTextUpdate(event, id)} value={text}></textarea>
    </div>
  );
};

export default Note;
