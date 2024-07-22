import React from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from '../common/ErrorBoundary';

/**
 * Component that displays detailed information about a film in a modal dialog.
 * @param {Object} props - Component props
 * @param {boolean} props.show - Flag indicating whether the modal should be displayed.
 * @param {Function} props.handleClose - Function to handle closing the modal.
 * @param {Object} props.film - Film object containing title, episode_id, director, producer, release_date, and opening_crawl.
 * @returns {JSX.Element|null} FilmModal component JSX or null if show prop is false.
 */
const FilmModal = ({ show, handleClose, film }) => {
  if (!show) {
    return null;
  }

  return (
    <>
      <ErrorBoundary>
        <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{film.title}</h5>
              </div>
              <div className="modal-body">
                <p><strong>Episode ID:</strong> {film.episode_id}</p>
                <p><strong>Director:</strong> {film.director}</p>
                <p><strong>Producer:</strong> {film.producer}</p>
                <p><strong>Release Date:</strong> {film.release_date}</p>
                <p><strong>Opening Crawl:</strong> {film.opening_crawl}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={handleClose}>Close</button>
              </div>
            </div>
          </div>
        </div>
      </ErrorBoundary>
    </>
  );
};

// Define prop types for FilmModal component
FilmModal.propTypes = {
  /**
   * Flag indicating whether the modal should be displayed.
   */
  show: PropTypes.bool.isRequired,

  /**
   * Function to handle closing the modal.
   */
  handleClose: PropTypes.func.isRequired,

  /**
   * Film object containing title, episode_id, director, producer, release_date, and opening_crawl.
   */
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    episode_id: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    producer: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    opening_crawl: PropTypes.string.isRequired,
  }).isRequired,
};

export default FilmModal;
