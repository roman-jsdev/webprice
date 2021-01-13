import { useRef } from "react";
import { useCartList } from "../Cart/CartListContext";
import { usePrice } from "../Cart/PriceContext";

export const QUIZ_STEP_1_ITEM = (props) => {
  const price = usePrice();
  const cartList = useCartList();

  const radioRef = useRef();
  const titleRef = useRef();

  const clickHandler = (e) => {
    e.preventDefault();
    cartList.addItem(props.title);
    console.log(cartList.item.length);
    if (
      e.target === titleRef.current &&
      cartList.item.indexOf(props.title) !== -1
    ) {
      price.clear();
    } else {
      price.setNewPrice(props.price);
    }
    radioRef.current.checked = !radioRef.current.checked;
  };

  return (
    <div className="col-md-4 border-end">
      <div
        className="form-check justify-content-center d-flex p-0"
        onClick={(e) => clickHandler(e)}
      >
        <input
          ref={radioRef}
          className="form-check-input me-3"
          type="radio"
          name="flexRadioDefault"
          id={`flexRadioDefault1${props.id}`}
          style={{ pointerEvents: "none" }}
        />
        <label
          ref={titleRef}
          className="form-check-label fw-bold"
          htmlFor={`flexRadioDefault1${props.id}`}
        >
          {props.title}
        </label>
      </div>
      <p className="m-2 text-center fw-bold mb-0">${props.price}</p>
      <ul className="pt-3 p-0 d-flex flex-column">
        {props.desc.map((desc, id) => {
          return (
            <li
              key={id}
              className="list-group-item list-group-item-light d-flex align-items-center"
            >
              <i className="fas fa-check me-3"></i>
              <p className="m-0 text-start">{desc}</p>
            </li>
          );
        })}
      </ul>
      <div className="d-flex justify-content-center">
        <img
          src="https://www.onthemapmarketing.com/wp-content/themes/otm-wp-theme/resources/assets/scripts/calculator/images/website-types/singlePage.jpg"
          className="img-fluid"
          alt="text"
        />
      </div>
    </div>
  );
};
