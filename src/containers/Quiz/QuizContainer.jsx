import classes from "./QuizContainer.module.css";

export const QuizContainer = (props) => {
  return (
    <div className={`col-12 p-0 col-xl-8 mb-5 ${classes.QuizContainer}`}>
      {props.children}
    </div>
  );
};
