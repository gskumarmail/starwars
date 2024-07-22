import http from "../utils/Swapi";

/**
 * @typedef {Object} SwapiService
 * @property {() => Promise<any>} getAllPeople - Function to get all people from SWAPI.
 * @property {(id: string | number) => Promise<any>} getPeople - Function to get a specific person from SWAPI by ID.
 * @property {(id: string | number) => Promise<any>} getPlanets - Function to get a specific planet from SWAPI by ID.
 * @property {(url: string) => Promise<any>} getFilms - Function to get data from a specific SWAPI endpoint provided by URL.
 */

const SwapiService = {
  /**
   * Function to get all people from SWAPI.
   * @returns {Promise<any>}
   */
  getAllPeople: () => {
    return http.get("/people/?page=1");
  },

  /**
   * Function to get a specific person from SWAPI by ID.
   * @param {string | number} id - The ID of the person.
   * @returns {Promise<any>}
   */
  getPeople: (id) => {
    return http.get(`/people/${id}`);
  },

  /**
   * Function to get a specific planet from SWAPI by ID.
   * @param {string | number} id - The ID of the planet.
   * @returns {Promise<any>}
   */
  getPlanets: (id) => {
    return http.get(`/planets/${id}`);
  },

  /**
   * Function to get data from a specific SWAPI endpoint provided by URL.
   * @param {string} url - The URL of the SWAPI endpoint.
   * @returns {Promise<any>}
   */
  getFilms: (url) => {
    return http.get(url);
  },
};

export default SwapiService;
