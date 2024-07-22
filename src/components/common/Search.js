import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Search component for input search functionality.
 * @param {Object} props - The props object containing placeholder, label, and onCallBack function.
 * @param {string} props.placeholder - The placeholder text for the search input field.
 * @param {string} props.label - The label text for the search button.
 * @param {function} props.onCallBack - The callback function triggered when the search value changes or is reset.
 * @returns {JSX.Element} Search component JSX.
 */
const Search = ({ placeholder, label, onCallBack }) => {
  const [searchTitle, setSearchTitle] = useState('');

  /**
   * Handler for input change.
   * Updates the searchTitle state and passes the search value to the parent component.
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event object from the input field.
   */
  const onChangeSearchTitle = (e) => {
    setSearchTitle(e.target.value);
    onCallBack(e.target.value);
  };

  /**
   * Handler for reset button.
   * Resets the searchTitle state and notifies the parent component to reset the search value.
   */
  const refreshList = () => {
    if (searchTitle) {
      setSearchTitle('');
      onCallBack('');
    }
  };

  return (
    <div className="search-container">
      <div className="input-group">
        <input
          type="text"
          className="form-control search-input"
          placeholder={placeholder}
          value={searchTitle}
          onChange={onChangeSearchTitle}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            type="button"
            onClick={refreshList}
          >
            {label}
          </button>
        </div>
      </div>
    </div>
  );
};

// Define prop types for Search component
Search.propTypes = {
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onCallBack: PropTypes.func.isRequired,
};

export default Search;
