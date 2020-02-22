import toArray from "./toArray";

/**
 * Counts the characters in a string and counts emojis correctly.
 *
 * @param {string} str The string to count characters from.
 * @return {number} The number of characters in the string.
 */
function countWithEmojis(str) {
  return toArray(str).length;
}

export default countWithEmojis;
