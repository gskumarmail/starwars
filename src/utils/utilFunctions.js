/**
 * Function to format a given date or date-time string into MM/DD/YYYY format.
 * @param {string|Date} dateTime - The date or date-time string to be formatted.
 * @returns {string} The formatted date string in MM/DD/YYYY format.
 */
export const formatDate = (dateTime) => {
    const dateObj = new Date(dateTime);
    const month = (dateObj.getMonth() > 8) ? (dateObj.getMonth() + 1) : ('0' + (dateObj.getMonth() + 1));
    const day = (dateObj.getDate() > 9) ? dateObj.getDate() : ('0' + dateObj.getDate());
    const year = dateObj.getFullYear();
    return `${month}/${day}/${year}`;
}

/**
 * Extracts the last segment of the path from the given URL.
 * @param {string} url - The URL from which to extract the last segment.
 * @returns {string} The last segment of the URL path.
 */
export const getUrlLastIndex = (url) => {
    const urlObj = new URL(url);
    const paths = urlObj.pathname.split("/").filter(Boolean);
    return paths.pop();
};

/**
 * Removes non-alphabetic characters (excluding spaces) from a given string.
 * @param {string} inputString - The input string to be cleaned.
 * @returns {string} The cleaned string with non-alphabetic characters replaced by spaces.
 */
export const cleanString = (inputString) => {
    return inputString.replace(/[^a-zA-Z ]/g, ' ');
};
