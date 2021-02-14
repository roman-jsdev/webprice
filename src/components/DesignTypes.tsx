import { storage, toggleStorage } from "../utils";
import { selectedDesignStyle } from "../constants";
import { useCartList } from "../context/CartListContext";
import { IDesignTypeProps } from "../interfaces/componentsInterfaces";

export const DesignTypes = ({
  title,
  price,
  description,
  imgSource,
}: IDesignTypeProps) => {
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
          style={storage("design") === title ? selectedDesignStyle : undefined}
          src={imgSource}
          className="img-fluid img-hover"
          alt={title}
        />
      </div>
    </div>
  );
};
