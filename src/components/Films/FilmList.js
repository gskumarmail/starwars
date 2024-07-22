import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FilmModal from './FilmModal';
import ErrorBoundary from '../common/ErrorBoundary';

/**
 * Component that displays a list of films and allows opening a modal for each film.
 * @param {Object} props - Component props
 * @param {Array} props.records - Array of film records containing title, episode_id, opening_crawl, director, producer, release_date.
 * @returns {JSX.Element} FilmList component JSX
 */
const FilmList = ({ records }) => {
  // State for modal visibility and selected film
  const [showModal, setShowModal] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState(null);

  /**
   * Function to handle opening modal and setting selected film.
   * @param {Object} film - The film object to be displayed in the modal.
   */
  const handleOpenModal = (film) => {
    setSelectedFilm(film);
    setShowModal(true);
  };

  /**
   * Function to close the modal.
   */
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Extracting necessary data from records
  const extractedData = records.map(record => ({
    title: record.title,
    episode_id: record.episode_id,
    opening_crawl: record.opening_crawl,
    director: record.director,
    producer: record.producer,
    release_date: record.release_date
  }));

  return (
    <>
      <ErrorBoundary>
        <div className='film-list-container'>
          <h5>List of Films</h5>
          <hr />
          {extractedData.map((film, index) => (
            <div key={index} className='film-list' onClick={() => handleOpenModal(film)} style={{ cursor: 'pointer' }}>
              <p>{film.title}</p>
            </div>
          ))}

          {/* Modal component */}
          <FilmModal show={showModal} handleClose={handleCloseModal} film={selectedFilm} />
        </div>
      </ErrorBoundary>
    </>
  );
};

// Prop types validation for FilmList component
FilmList.propTypes = {
  records: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    episode_id: PropTypes.number.isRequired,
    opening_crawl: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    producer: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
  })).isRequired,
};

export default FilmList;
