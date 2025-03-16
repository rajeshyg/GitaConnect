import { Parser } from 'json2csv';
import Papa from 'papaparse'; // Need to add this dependency

/**
 * Generate a CSV string from an array of objects
 * @param {Array<Object>} data - The data to be converted
 * @param {Array<string>} fields - The fields to include in CSV
 * @returns {string} - CSV content
 */
export function generateCSV(data, fields) {
  try {
    const parser = new Parser({ fields });
    return parser.parse(data);
  } catch (error) {
    console.error('Error generating CSV:', error);
    return '';
  }
}

/**
 * Parse a CSV string into an array of objects
 * @param {string} csvString - The CSV string to parse
 * @param {Object} options - Options for parsing
 * @returns {Array<Object>} - Array of parsed objects
 */
export function parseCSV(csvString, options = {}) {
  try {
    const result = Papa.parse(csvString, {
      header: true,
      skipEmptyLines: true,
      ...options
    });
    return result.data;
  } catch (error) {
    console.error('Error parsing CSV:', error);
    return [];
  }
}
