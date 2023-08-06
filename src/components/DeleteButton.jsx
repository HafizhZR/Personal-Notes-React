import React from "react";
import PropTypes from "prop-types";

const DeleteButton = ({ id, onDelete }) => {
    return (
        <div className='note-item__action'>
            <button className='note-item__delete-button' onClick={() => onDelete(id)}>Delete</button>
        </div>

    );
}

DeleteButton.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default DeleteButton;