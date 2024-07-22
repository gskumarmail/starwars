import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import SwapiService from "../../services/SwapiService";
import { getUrlLastIndex } from "../../utils/utilFunctions"
import Loading from '../common/LoadingSpinner';
import ErrorBoundary from '../common/ErrorBoundary';

const Planets = ({ url }) => {
  const [planetDetails, setPlanetDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Function to fetch planet details based on URL
  const getPlanetDetails = (url) => {
    setIsLoading(true);
    const planetId = getUrlLastIndex(url);
    SwapiService.getPlanets(planetId)
      .then(response => {
        setPlanetDetails(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching planet details:", error);
        setIsLoading(false);
      });
  };

  // Extracts planet ID from the given URL
  const getPlanetIdFromUrl = (url) => {
    const urlObj = new URL(url);
    const paths = urlObj.pathname.split("/").filter(Boolean);
    return paths.pop();
  };

  // Effect to fetch planet details when URL changes
  useEffect(() => {
    if (url) {
      getPlanetDetails(url);
    }
  }, [url]);

  return (
    <>
      <ErrorBoundary>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="planet-details">
            <h5>Planet Details</h5>
            <hr/>
              <div className="grid-container">
                <div className="label">Name:</div>
                <div className="value">{planetDetails.name}</div>
                <div className="label">Rotation:</div>
                <div className="value">{planetDetails.rotation_period}</div>
                <div className="label">Orbital Period:</div>
                <div className="value">{planetDetails.orbital_period}</div>
                <div className="label">Diameter:</div>
                <div className="value">{planetDetails.diameter}</div>
                <div className="label">Climate:</div>
                <div className="value">{planetDetails.climate}</div>
                <div className="label">Gravity:</div>
                <div className="value">{planetDetails.gravity}</div>
                <div className="label">Terrain:</div>
                <div className="value">{planetDetails.terrain}</div>
                <div className="label">Surface Water:</div>
                <div className="value">{planetDetails.surface_water}</div>
                <div className="label">Population:</div>
                <div className="value">{planetDetails.population}</div>
            </div>
          </div>
        )}
      </ErrorBoundary>
    </>
  );
};

// Define prop types for Planets component
Planets.propTypes = {
  url: PropTypes.string.isRequired
};

export default Planets;
