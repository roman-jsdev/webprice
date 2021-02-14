import { useCallback, useState } from "react";

import axios, { AxiosResponse } from "axios";

export const useDB = (method: string, path?: string, data?: object) => {
  const [response, setResponse] = useState<AxiosResponse<any> | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getURL = (path?: string) =>
    `${process.env.REACT_APP_DB_URL}${path}.json?auth=${process.env.REACT_APP_KEY}`;

  const fetchDB = useCallback(
    async (asyncData?: object, asyncPath?: string) => {
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

  return [fetchDB, isLoading, response] as const;
};
