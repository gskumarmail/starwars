import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import SwapiService from "../../services/SwapiService";
import Loading from '../common/LoadingSpinner';
import FilmList from "./FilmList";
import ErrorBoundary from '../common/ErrorBoundary';

/**
 * Component that fetches and displays details of films based on their URLs.
 * @param {Object} props - Component props
 * @param {string[]} props.filmsUrls - Array of URLs pointing to film details.
 * @returns {JSX.Element} Films component JSX
 */
const Films = ({ filmsUrls }) => {

  const [filmDetails, setFilmDetails] = useState([]); // State to hold fetched film details
  const [isLoading, setIsLoading] = useState(false); // State to manage loading state

  useEffect(() => {
    /**
     * Function to fetch film details from SWAPI based on provided URLs.
     */
    const getFilmsDetails = async () => {
      // Check if filmsUrls is defined and not empty
      if (filmsUrls && filmsUrls.length > 0) {
        // Set loading state to true
        setIsLoading(true);
        try {
          // Create an array of promises for fetching film data from each URL
          const promiseArray = filmsUrls.map(url => SwapiService.getFilms(url));
          // Wait for all promises to resolve using Promise.all
          const responses = await Promise.all(promiseArray);
          // Extract film data from each response
          const filmsData = responses.map(response => response.data);
          // Update filmDetails state with fetched data
          setFilmDetails(filmsData);
        } catch (error) {
          // Log error if fetching data fails
          console.error("Error fetching film details:", error);
        } finally {
          // Set loading state to false after fetching data (whether successful or not)
          setIsLoading(false);
        }
      }
    };
  
    // Call the getFilmsDetails function when filmsUrls changes or component mounts
    getFilmsDetails();
  }, [filmsUrls]); // Depend on filmsUrls so useEffect runs when filmsUrls changes
  
  return (
    <ErrorBoundary>
      <>
        {isLoading ? <Loading /> : <FilmList records={filmDetails} />}
      </>
    </ErrorBoundary>
  );
};

// Define prop types for Films component
Films.propTypes = {
  /**
   * Array of URLs pointing to film details.
   */
  filmsUrls: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Films;
