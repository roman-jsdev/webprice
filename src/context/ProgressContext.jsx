import { createContext, useContext, useState } from "react";

const ProgressContext = createContext();

export const useProgress = () => useContext(ProgressContext);

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(0);

  const setCurrentProgress = setProgress;

  const setNewProgress = (newProgress) =>
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
