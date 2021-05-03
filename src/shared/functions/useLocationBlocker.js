import { useHistory } from "react-router-dom";
import { useEffect } from "react";


const useLocationBlocker = () => {
  /** 
   * Prevents react-router from pushing the same
   * page to the history twice which leads to
   * multiple clicks on the back icon of the browser
   * being necessary to go back into the history.
  */
  const history = useHistory();
  useEffect(
    () =>
      history.block(
        (location, action) =>
          action !== "PUSH" ||
          getLocationId(location) !== getLocationId(history.location)
      ),
    [] // eslint-disable-line react-hooks/exhaustive-deps
  );
}

const getLocationId = ({ pathname, search, hash }) => {
  return pathname + (search ? "?" + search : "") + (hash ? "#" + hash : "");
}

export default useLocationBlocker;