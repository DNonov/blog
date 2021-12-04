/**
 * Returns a UNIX time stamp from a string formatted 'DD.MM.YYYY'.
 *
 * @example generateUNIXTimestamp('11.01.21') // '1613001600000'
 * @param {string} date - formatted 'DD.MM.YYYY'
 * @returns {number} unix time stamp
 */
export default function generateUNIXTimestamp(date) {
  return new Date(
    date.split('.')[2],
    date.split('.')[1],
    date.split('.')[0]
  ).valueOf();
}


