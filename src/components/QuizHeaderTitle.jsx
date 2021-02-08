import { useProgress } from "../context/ProgressContext";

export const QuizHeaderTitle = (props) => {
  const { progress } = useProgress();

  let title = "";

  switch (progress) {
    case 0:
      title = "Website Type";
      break;
    case 25:
      title = "Choose Design";
      break;
    case 50:
      title = "Choose Services";
      break;
    case 75:
      title = "Checkout";
      break;
    case 100:
      title = "";
      break;
    default:
      break;
  }

  return (
    <div className="col-6">
      <p
        className="text-center fs-3 m-0"
        style={{ color: "white", userSelect: "none" }}
      >
        {title}
      </p>
    </div>
  );
};
