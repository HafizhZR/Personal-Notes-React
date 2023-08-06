import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

const NoteItemTitle = ({ id, title }) => {

    return (
        <h3 className="note-item__title"><Link to={`/detail/${id}`}>{title}</Link></h3>

    );
}

NoteItemTitle.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default NoteItemTitle;