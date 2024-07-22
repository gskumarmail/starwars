import axios from "axios";

/**
 * Axios instance for making HTTP requests to the Star Wars API (SWAPI).
 * @type {import("axios").AxiosInstance}
 */
const http = axios.create({
  baseURL: "https://swapi.dev/api",
  headers: {
    "Content-type": "application/json"
  }
});

export default http;
