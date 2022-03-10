import React, { useState, useEffect } from "react";
import Item from "./Item";
import SearchBar from "./SearchBar";
import axios from "axios";

function Main() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    if (notes.map((note) => note.title).includes(newNote.title)) {
      return false;
    }
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });

    axios
    .post('http://localhost:4000/api', newNote)
    .then(() => console.log('Note Created'))
    .catch(err => {
      console.error(err);
    });
    return true;
  }

  function deleteNote(note) {
    axios
    .delete('http://localhost:4000/api', { data: note })
    .then(() => console.log('Note Deleted'))
    .catch(err => {
      console.error(err);
    });
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== note.id;
      });
    });
  }

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((notes) => setNotes(notes));
  }, []);

  return (
    <div className="main">
      <SearchBar onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Item
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default Main;
