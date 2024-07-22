import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import SwapiService from "../../services/SwapiService";
import Planets from '../Planets/Planets';
import Films from '../Films/Films';
import Loading from '../common/LoadingSpinner';
import CharacterDetailsCard from './CharacterDetailsCard';
import ErrorBoundary from '../common/ErrorBoundary';

/**
 * Displays details of a character fetched from the SWAPI (Star Wars API).
 * It retrieves and displays information about the character, including their
 * name, height, gender, birth year, homeworld, and films they appeared in.
 * 
 * @returns {JSX.Element} JSX for the Characters component.
 */
const Characters = () => {
  const { id } = useParams(); // Get the character ID from the route params
  const navigate = useNavigate(); // Navigate function from react-router-dom
  const [characterDetails, setCharacterDetails] = useState({}); // State to hold character details
  const [isLoading, setIsLoading] = useState(false); // Loading state

  /**
   * Function to fetch character details from the SWAPI based on the character ID.
   * Sets isLoading state to true while fetching and updates characterDetails state
   * on successful fetch.
   * 
   * @param {string} id - Character ID
   */
  const getCharacterDetails = (id) => {
    setIsLoading(true);
    SwapiService.getPeople(id)
      .then(response => {
        setCharacterDetails(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching character details:', error);
        setIsLoading(false);
      });
  };

  // Effect hook to fetch character details when ID changes
  useEffect(() => {
    if (id) {
      getCharacterDetails(id);
    }
  }, [id]);

  /**
   * Function to navigate back to the characters list page.
   */
  const goBack = () => {
    navigate("/characters");
  };

  return (
    <>
      <ErrorBoundary>
        <div className="card">
          <div className="card-header" role="Character Details">
            Character Details
          </div>
          {isLoading ? <Loading /> : (
            <div className="card-body">
              <div className="row">
                <div className="col-sm-6">
                  <CharacterDetailsCard characterDetails={characterDetails} />
                </div>
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <Planets url={characterDetails.homeworld} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <Films filmsUrls={characterDetails.films} />
                </div>
              </div>
              <div className="button-container">
                <button className="btn btn-primary" onClick={goBack}>Go back</button>
              </div>
            </div>
          )}
        </div>
      </ErrorBoundary>
    </>
  );
};

export default Characters;
