import classes from "@components/QuizContainer/QuizContainer.module.css";

export const QuizContentWrapper = ({ children }) => (
  <div className={`row py-4 px-3 ${classes.FullWidth}`}>{children}</div>
);
