import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PenIcon from '../common/PenIcon';
import { formatDate } from '../../utils/utilFunctions'

const CharacterDetailsCard = ({ characterDetails }) => {
  const [editMode, setEditMode] = useState(false);
  const [charDetails, setCharDetails] = useState(characterDetails); // State to hold character details
  const [editedHeight, setEditedHeight] = useState(characterDetails.height);
  const [editedGender, setEditedGender] = useState(characterDetails.gender);

  const genderOptions = ['Male', 'Female'];

  const handleEdit = () => {
    setEditMode(true);
  };

  /* 
    Handle save logic here, e.g., send editedHeight and editedGender
    After save, switch editMode off 
   */
  const handleSave = () => {
    setCharDetails(prevState => ({
        ...prevState,
        height: editedHeight,
        gender: editedGender
      }));
    setEditMode(false);
  };

  // Reset editedHeight and editedGender to original values
  const handleCancel = () => {
    setEditedHeight(characterDetails.height);
    setEditedGender(characterDetails.gender);
    setEditMode(false);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5>{charDetails.name}</h5>
        {!editMode && <span className="edit-icon" onClick={handleEdit}  data-toggle="tooltip" title="Click here to Edit Height & Gender">
          <PenIcon />
        </span>}
        <hr />
        <div className="grid-container">
          <div className="label">Hair Color:</div>
          <div className="value">{charDetails.hair_color}</div>
          <div className="label">Skin Color:</div>
          <div className="value">{charDetails.skin_color}</div>
          <div className="label">Eye Color:</div>
          <div className="value">{charDetails.eye_color}</div>
          <div className="label">Birth Year:</div>
          <div className="value">{charDetails.birth_year}</div>
          <div className="label">Created:</div>
          <div className="value">{formatDate(charDetails.created)}</div>
          <div className="label">Edited:</div>
          <div className="value">{formatDate(charDetails.edited)}</div>
          <div className="label">Mass:</div>
          <div className="value">{charDetails.mass}</div>
          <div className="label">Height:</div>
          <div
            className="value"
            onClick={handleEdit}
            style={{ cursor: 'pointer' }}
            data-toggle="tooltip"
            title="Click here to Edit Height & Gender"
          >
            {editMode ? (
              <input
                type="text"
                value={editedHeight}
                onChange={(e) => setEditedHeight(e.target.value)}
                className="form-control"
              />
            ) : (
                charDetails.height
            )}
          </div>
          <div className="label">Gender:</div>
          <div
            className="value"
            onClick={handleEdit}
            style={{ cursor: 'pointer' }}
            data-toggle="tooltip"
            title="Click here to Edit Height & Gender"
          >
            {editMode ? (
              <select
                className="form-control"
                value={editedGender}
                onChange={(e) => setEditedGender(e.target.value)}
              >
                {genderOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
                charDetails.gender
            )}
          </div>
        </div>

        {editMode && (
          <div className="button-container">
            <button className="btn btn-primary mr-2" onClick={handleSave}>
              Save
            </button>
            <button className="btn btn-secondary" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Define prop types for CharacterDetailsCard component
CharacterDetailsCard.propTypes = {
    characterDetails: PropTypes.shape({
      name: PropTypes.string.isRequired,
      hair_color: PropTypes.string.isRequired,
      skin_color: PropTypes.string.isRequired,
      eye_color: PropTypes.string.isRequired,
      birth_year: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
      edited: PropTypes.string.isRequired,
      mass: PropTypes.string.isRequired,
      height: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
    }).isRequired,
  };

export default CharacterDetailsCard;
