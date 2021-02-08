import { storage, toggleStorage } from "@src/utils";
import { selectedDesignStyle } from "@src/constants";
import { useCartList } from "@context/CartListContext";

export const DesignTypes = ({ title, price, description, imgSource }) => {
  const { nextStep } = useCartList();

  const chooseDesign = () => {
    nextStep(title);
    toggleStorage("design", title);
  };

  return (
    <div className="col-md-6 column-ease-in">
      <p className="m-0 text-center fs-4 fw-bold mb-2">{title}</p>
      <p className="m-2 text-center fw-bold mb-2">&#36;{price}</p>
      <p className="m-0 text-center mb-4">{description}</p>
      <div
        className="d-flex justify-content-center"
        style={{ cursor: "pointer" }}
        onClick={chooseDesign}
      >
        <img
          style={storage("design") === title ? selectedDesignStyle : null}
          src={imgSource}
          className="img-fluid img-hover"
          alt={title}
        />
      </div>
    </div>
  );
};
