function urlify(text) {
  const string = text.toLowerCase();
  /**
   * Replace whitespaces with '-'. Strings are read only, so we have
   * to create a new one.
   */
  let newString = "";
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === " ") {
      newString += "-";
    } else {
      newString += string[i];
    }
  }
  return newString;
}

export default urlify;
