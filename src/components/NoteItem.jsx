import React from "react";
import PropTypes from "prop-types";
import NoteItemTitle from "./NoteItemTitle";
import NoteItemDate from "./NoteItemDate";
import NoteItemBody from "./NoteItemBody";
import DeleteButton from "./DeleteButton";

const NoteItem = ({ id, title, body, createdAt, onDelete }) => {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <NoteItemTitle title={title} id={id.toString()} />
        <NoteItemDate createdAt={createdAt.toString()} />
        <NoteItemBody body={body} />
      </div>
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default NoteItem;
