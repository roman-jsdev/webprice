import classes from "./QuizContainer.module.css";

export const QuizContainer = ({ children }) => (
  <div className={`col-12 p-0 col-xl-8 mb-5 ${classes.QuizContainer}`}>
    {children}
  </div>
);
