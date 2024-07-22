import React from 'react';
import PropTypes from 'prop-types';
import { cleanString } from "../../utils/utilFunctions";

/**
 * Table component to display data in a tabular format.
 * @param {Object} props - The props object containing headers, data, and onCallBack function.
 * @param {string[]} props.headers - Array of column headers for the table.
 * @param {Object[]} props.data - Array of objects representing rows of data to display.
 * @param {function} props.onCallBack - Callback function triggered when a table row is clicked.
 * @returns {JSX.Element} Table component JSX.
 */
const Table = ({ headers, data, onCallBack }) => {
  // Clean headers for table columns
  const tableColumns = headers.map((col) => cleanString(col));

  /**
   * Redirects to a callback function with the index + 1.
   * @param {number} id - The index of the row clicked.
   */
  const redirect = (id) => {
    onCallBack(id); // Call the callback function with the index + 1
  };

  return (
    <>
    <table className="table table-borderless table-hover">
      <thead>
        <tr>
          {tableColumns.map((head, index) => (
            <th key={index} scope="col">{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((row, rowIndex) => (
            <tr key={rowIndex} onClick={() => redirect(rowIndex + 1)}>
              {headers.map((header, columnIndex) => (
                <td key={columnIndex}>{row[header]}</td>
              ))}
            </tr>
          ))
        ) : (
          <tr><td colSpan={headers.length}>No records found!...</td></tr>
        )}
      </tbody>
    </table>
    </>
  );
};

// Define prop types for Table component
Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onCallBack: PropTypes.func.isRequired,
};

export default Table;
