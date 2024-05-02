import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import {keepapp_backend} from "/home/bhavykun/ic-projects/keepapp/src/declarations/keepapp_backend/";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      keepapp_backend.createNote(newNote.title,newNote.content);
      return [newNote,...prevNotes];
    });
  }

  useEffect(()=>{
    console.log("trig");
    fetchData();
  },[]);

  async function fetchData(){
    const notesArray = await keepapp_backend.readNotes();
    setNotes(notesArray);
  }

  function deleteNote(id) {
    keepapp_backend.removeNote(id);
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
