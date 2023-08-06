import React, { useState, useEffect } from "react";
import { getActiveNotes, addNote, deleteNote } from "../utils/network-data";
import NoteInput from "../components/NoteInput";
import NotesList from "../components/NotesList";

const HomePage = () => {
  const [notes, setNotes] = useState([]);

  const onDeleteHandler = async (id) => {
    await deleteNote(id);
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  async function onAddNoteHandler(newNote) {
    const { error } = await addNote(newNote);
    fetchNotes();
    return !error;
  }

  const fetchNotes = async () => {
    const { data } = await getActiveNotes();
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  useEffect(() => {
    document.title = `Total Notes: ${notes.length}`;
  }, [notes]);

  return (
    <section className="homepage">
      <NoteInput addNote={onAddNoteHandler} />
      {notes.length === 0 ? (
        <section className="notes-list-empty">
          <p className="notes-list__empty">Tidak ada catatan</p>
        </section>
      ) : (
        <NotesList notes={notes} onDelete={onDeleteHandler} />
      )}
    </section>
  );
};

export default HomePage;
