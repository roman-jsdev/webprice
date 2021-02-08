import { useRef } from "react";
import { storage, toggleStorage } from "@src/utils";
import { useCartList } from "@context/CartListContext";
import { Label, List } from "./WebsiteTypes.module.css";

export const WebsiteTypes = ({ title, id, price, description, imgSource }) => {
  const { nextStep } = useCartList();
  const radioRef = useRef();
  const titleRef = useRef();

  const chooseWebsiteType = (event) => {
    event.preventDefault();
    nextStep(title);
    radioRef.current.checked = !radioRef.current.checked;
    toggleStorage("website", radioRef.current.id);
  };

  return (
    <div
      className={`col-md-4 border-end first-step-col column-ease-in rl-flex-column`}
    >
      <div>
        <div
          className="form-check justify-content-center d-flex p-0"
          onClick={chooseWebsiteType}
        >
          <input
            ref={radioRef}
            readOnly
            className="form-check-input me-3"
            checked={`flexRadioDefault1${id}` === storage("website")}
            type="radio"
            name="flexRadioDefault"
            id={`flexRadioDefault1${id}`}
            style={{ pointerEvents: "none" }}
          />
          <label
            ref={titleRef}
            className={`form-check-label fw-bold ${Label}`}
            htmlFor={`flexRadioDefault1${id}`}
          >
            {title}
          </label>
        </div>
        <p className="m-2 text-center fw-bold mb-0">&#36;{price}</p>
        <ul className="pt-3 p-0 d-flex flex-column">
          {description.map((descriptionText, index) => (
            <li
              key={index}
              className={`list-group-item list-group-item-light d-flex align-items-center ${List}`}
            >
              <i className="fas fa-check me-3"></i>
              <p className="m-0 text-start">{descriptionText}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="d-flex justify-content-center">
        <img src={imgSource} className="img-fluid" alt="text" />
      </div>
    </div>
  );
};
