import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SwapiService from "../../services/SwapiService";
import Loading from '../common/LoadingSpinner';
import Search from "../common/Search";
import Table from "../common/Table";
import ErrorBoundary from '../common/ErrorBoundary';

/**
 * Component to display a list of characters fetched from the Star Wars API.
 * Provides search functionality and navigation to individual character details.
 */
const CharactersList = () => {
  const navigate = useNavigate();

  const [charList, setCharList] = useState([]); // State to hold the list of characters
  const [isLoading, setIsLoading] = useState(false); // State to manage loading state
  const [headers, setHeaders] = useState([]); // State to hold table headers

  /**
   * Effect hook to retrieve the list of characters when the component mounts.
   */
  useEffect(() => {
    retrieveCharList();
  }, []);

  /**
   * Function to fetch the list of characters from the API.
   * Sets loading state to true before fetching and updates charList and headers states after fetching.
   */
  const retrieveCharList = () => {
    setIsLoading(true);
    SwapiService.getAllPeople()
      .then(response => {
        const mappedData = mapData(response.data.results);
        setCharList(mappedData);
        setHeaders(Object.keys(mappedData[0]));
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error retrieving character list:', error);
        setIsLoading(false);
      });
  };

  /**
   * Function to map the fetched character data to a simplified format.
   * @param {Array} data - The array of character objects fetched from the API.
   * @returns {Array} An array of simplified character objects with selected properties.
   */
  const mapData = (data) => {
    return data.map(({ name, height, mass, gender, birth_year }) => ({
      name,
      height,
      mass,
      gender,
      birth_year
    }));
  };

  /**
   * Function to navigate to the details page of a selected character.
   * @param {number} id - The ID of the character to navigate to.
   */
  const handleRowClick = (id) => {
    navigate(`/characters/${id}`);
  };

  /**
   * Function to handle search functionality based on character name.
   * @param {string} key - The search key entered by the user.
   */
  const handleSearch = (key) => {
    const searchKey = key && key.toLowerCase();
    if (searchKey.trim() === "") {
      retrieveCharList();
    } else {
      const searchData = charList.filter(entry =>
        Object.values(entry).some(val =>
          typeof val === "string" && val.toLowerCase().includes(searchKey)
        )
      );
      setCharList(searchData);
    }
  };

  return (
    <>
      <ErrorBoundary>
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-sm-6" role="Character List">
                Character List
              </div>
              <div className="col-sm-6">
                  <Search
                    placeholder="Search by Name"
                    label="Reset"
                    onCallBack={handleSearch}
                  />
              </div>
            </div>
          </div>
          <div className="card-body">
            {isLoading ? <Loading /> : <Table headers={headers} data={charList} onCallBack={handleRowClick} />}
          </div>
        </div>
      </ErrorBoundary>
    </>
  );
};

export default CharactersList;
