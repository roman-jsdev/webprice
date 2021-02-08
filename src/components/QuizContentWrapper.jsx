import classes from "@components/QuizContainer/QuizContainer.module.css";

export const QuizContentWrapper = (props) => {
  return (
    <div className={`row py-4 px-3 ${classes.FullWidth}`}>{props.children}</div>
  );
};
