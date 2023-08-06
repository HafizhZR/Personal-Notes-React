import React from "react";
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/index';

const NoteItemDate = ({ createdAt }) => {
  const formattedDate = showFormattedDate(createdAt);

  return (
    <p className="note-item__date">{formattedDate}</p>
  );
}

NoteItemDate.propTypes = {
  createdAt: PropTypes.string.isRequired,
}

export default NoteItemDate;
