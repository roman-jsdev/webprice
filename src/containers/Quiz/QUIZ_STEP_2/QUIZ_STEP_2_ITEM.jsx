import { useRef } from "react";
import { useCartList } from "../Cart/CartListContext";

export const QUIZ_STEP_2_ITEM = (props) => {
  const cartList = useCartList();
  const selectedImg = useRef();

  const clickHandler = () => {
    cartList.addItem(props.title);
    selectedImg.current.style.boxShadow = "0 0px 2px 2px #bfbfbf";
  };

  return (
    <div className="col-md-6">
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
          src="https://www.onthemapmarketing.com/wp-content/themes/otm-wp-theme/resources/assets/scripts/calculator/images/thumbnails/template-wordpress.jpg"
          className="img-fluid"
          alt="text"
        />
      </div>
    </div>
  );
};
