import { createContext, useContext, useState } from "react";

import { IChildren, IProgressContext } from "../interfaces/defaultInterfaces";

const ProgressContext = createContext({} as IProgressContext);

export const useProgress = () => useContext(ProgressContext);

export const ProgressProvider = ({ children }: IChildren) => {
  const [progress, setProgress] = useState(0);

  const setCurrentProgress = setProgress;

  const setNewProgress = (newProgress: number) =>
    setProgress((prev) => prev + newProgress);

  const clearProgress = () => setProgress(0);

  return (
    <ProgressContext.Provider
      value={{
        progress,
        setNewProgress,
        clearProgress,
        setCurrentProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};
