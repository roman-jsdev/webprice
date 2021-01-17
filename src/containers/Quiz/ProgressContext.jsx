import { createContext, useContext, useState } from "react";

const ProgressContext = createContext();

export const useProgress = () => useContext(ProgressContext);

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(0);

  const setCurrentProgress = (val) => setProgress(val);

  const setNewProgress = (newProgress) => {
    setProgress((prev) => prev + newProgress);
  };

  const clear = () => setProgress(0);

  return (
    <ProgressContext.Provider
      value={{
        progress,
        setNewProgress,
        clear,
        setCurrentProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};
