import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";

const NotesList = ({ notes, onDelete }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem key={note.id.toString()} id={note.id.toString()} onDelete={() => onDelete(note.id.toString())} title={note.title} body={note.body} createdAt={note.createdAt.toString()}
        />
      ))}
    </div>
  );
};

NotesList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NotesList;
