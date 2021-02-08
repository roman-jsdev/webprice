import { useCallback, useState } from "react";

import axios from "axios";

export const useDB = (method, path, data) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getURL = (path) =>
    `https://webprice-app-default-rtdb.firebaseio.com/${path}.json?auth=${process.env.REACT_APP_AXLOG}`;

  const fetchDB = useCallback(
    async (asyncData, asyncPath) => {
      let responseFromDB = null;
      try {
        switch (method) {
          case "put":
            responseFromDB = await axios.put(
              asyncPath ? getURL(asyncPath) : getURL(path),
              asyncData || data
            );
            break;
          case "get":
            responseFromDB = await axios.get(
              asyncPath ? getURL(asyncPath) : getURL(path)
            );
            break;
          case "delete":
            responseFromDB = await axios.delete(
              asyncPath ? getURL(asyncPath) : getURL(path)
            );
            break;
          default:
            responseFromDB = null;
        }
        setResponse(responseFromDB);
        setIsLoading(false);
      } catch (e) {
        alert(e);
      }
    },
    [path, method, data]
  );

  return [fetchDB, isLoading, response];
};
