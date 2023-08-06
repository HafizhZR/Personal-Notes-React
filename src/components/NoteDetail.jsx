import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/index';

const NoteDetail = ({ createdAt, title, body }) => {

  const formattedDate = showFormattedDate(createdAt);
  return (
    <div className='detail-page'>
      <h3 className='detail-page__title'>{title}</h3>
      <p className='detail-page__createdAt'>{formattedDate}</p>
      <div>
        <p className='detail-page__body'>{body}</p>
      </div>
    </div>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteDetail;
