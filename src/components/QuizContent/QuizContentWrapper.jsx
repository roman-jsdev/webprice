import classes from "../../containers/Quiz/QuizContainer.module.css";

export const QuizContentWrapper = (props) => {
  return (
    <div className={`row py-4 px-3 ${classes.FullWidth}`}>{props.children}</div>
  );
};
