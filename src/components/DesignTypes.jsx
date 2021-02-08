import { useRef } from "react";
import { storage } from "../utils";
import { useCartList } from "../context/CartListContext";
import { selectedDesignStyle } from "@src/constants";

export const DesignTypes = (props) => {
  const cartList = useCartList();
  const selectedImg = useRef();

  const clickHandler = () => {
    cartList.nextStep(props.title);
    storage("design") === props.title
      ? sessionStorage.removeItem("design")
      : storage("design", props.title);
  };

  return (
    <div className="col-md-6 column-ease-in">
      <p className="m-0 text-center fs-4 fw-bold mb-2">{props.title}</p>
      <p className="m-2 text-center fw-bold mb-2">${props.price}</p>
      <p className="m-0 text-center mb-4">{props.desc}</p>
      <div
        className="d-flex justify-content-center"
        style={{ cursor: "pointer" }}
        onClick={() => clickHandler()}
      >
        <img
          ref={selectedImg}
          style={storage("design") === props.title ? selectedDesignStyle : null}
          src={props.imgSrc}
          className="img-fluid img-hover"
          alt="text"
        />
      </div>
    </div>
  );
};
