import { useEffect, useState } from 'react';
import Note from './components/Note';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [notes, setNotes] = useState(new Map());

  useEffect(
    () => {
      const storedNotes = JSON.parse(localStorage.getItem('notes'));

      if (storedNotes !== null)
        setNotes(storedNotes);
    },
    []
  )

  useEffect(
    () => {
      localStorage.setItem('notes', JSON.stringify(notes));
    },
    [notes]
  )

  const onTextUpdate = (event, key) => {
    const { value } = event.target;

    setNotes(prevNotes => ({
      ...prevNotes,
      [key]: value
    }));
  };

  const onDeleteNote = id => {
    setNotes(prevNotes => {
      delete prevNotes[id];
      return { ...prevNotes };
    });
  };

  const addNote = () => {
    setNotes(prevNotes => ({
      ...prevNotes,
      [uuidv4()]: ''
    }));
  };

  return (
    <>
      <button className="add" id="add" onClick={addNote}>
        <i className="fas fa-plus"></i>
        Add note
      </button>
      {Object.keys(notes).map(key => {
        return <Note
          key={key}
          id={key}
          text={notes[key]}
          onDeleteNote={onDeleteNote}
          onTextUpdate={onTextUpdate}
        />
      })}
    </>
  );
};

export default App;
