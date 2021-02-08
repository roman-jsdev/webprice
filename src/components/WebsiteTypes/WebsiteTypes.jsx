import { useRef } from "react";
import { storage } from "../../utils";
import { useCartList } from "../../context/CartListContext";
import classes from "./WebsiteTypes.module.css";

export const WebsiteTypes = (props) => {
  const cartList = useCartList();

  const radioRef = useRef();
  const titleRef = useRef();

  const clickHandler = (e) => {
    e.preventDefault();
    cartList.nextStep(props.title);
    radioRef.current.checked = !radioRef.current.checked;
    storage("website") === radioRef.current.id
      ? sessionStorage.removeItem("website")
      : storage("website", radioRef.current.id);
  };

  return (
    <div
      className={`col-md-4 border-end first-step-col column-ease-in rl-flex-column`}
    >
      <div>
        <div
          className="form-check justify-content-center d-flex p-0"
          onClick={(e) => clickHandler(e)}
        >
          <input
            ref={radioRef}
            readOnly
            className="form-check-input me-3"
            checked={
              `flexRadioDefault1${props.id}` === storage("website")
                ? true
                : false
            }
            type="radio"
            name="flexRadioDefault"
            id={`flexRadioDefault1${props.id}`}
            style={{ pointerEvents: "none" }}
          />
          <label
            ref={titleRef}
            className={`form-check-label fw-bold ${classes.Label}`}
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
                className={`list-group-item list-group-item-light d-flex align-items-center ${classes.List}`}
              >
                <i className="fas fa-check me-3"></i>
                <p className="m-0 text-start">{desc}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="d-flex justify-content-center">
        <img src={props.imgSrc} className="img-fluid" alt="text" />
      </div>
    </div>
  );
};
