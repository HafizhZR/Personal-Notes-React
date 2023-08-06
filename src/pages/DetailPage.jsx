// DetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail';
import { getNote } from '../utils/network-data';
import PropTypes from 'prop-types';

const DetailPage = ({ id }) => {
  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const data = await getNote(id);
        setNote(data.data);
      } catch (error) {
        console.error(error);
        setNote(null);
      }
    };

    fetchNote();
  }, [id]);

  if (!note) {
    return <p>Note is not found!</p>;
  }

  return (
    <section className='detail-page'>
      <NoteDetail
        createdAt={note.createdAt}
        body={note.body}
        title={note.title}
      />
    </section>
  );
};

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
};

const DetailPageWrapper = () => {
  const { id } = useParams();
  return <DetailPage id={id} />;
};

export default DetailPageWrapper;