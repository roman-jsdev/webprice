import axios from "axios";
import { Fragment, useEffect, useRef, useState } from "react";
import { Loader } from "../components/Loader/Loader";

export const Orders = () => {
  const [response, setResponse] = useState([]);
  const loading = useRef(true);
  const orderIdRef = useRef([]);
  const [state, setState] = useState(0);

  useEffect(() => {
    let mounted = true;
    const getOrders = async () => {
      try {
        const res = await axios.get(
          `https://webprice-app-default-rtdb.firebaseio.com/orders.json?auth=${process.env.REACT_APP_AXLOG}`
        );
        if (res.data !== null && mounted) {
          orderIdRef.current = Object.keys(res.data).map((e) =>
            e.split("-").pop()
          );
          loading.current = false;
          setResponse(Object.keys(res.data).map((e) => res.data[e]));
        } else {
          loading.current = false;
          setResponse(null);
        }
      } catch (e) {
        alert("Some Problems With Data Fetching");
        console.log(e);
      }
    };
    getOrders();

    return () => (mounted = false);
  }, [state]);

  const arrayToNewline = (e) => {
    return e.map((e, i) => (
      <Fragment key={i}>
        {e}
        <br />
      </Fragment>
    ));
  };

  const clickHandler = (id) => {
    const deleteRecord = async (id) => {
      try {
        await axios.delete(
          `https://webprice-app-default-rtdb.firebaseio.com/orders/order-${id}.json?auth=${process.env.REACT_APP_AXLOG}`
        );
        orderIdRef.current = orderIdRef.current.filter((e) => e !== id);
        setState((prev) => prev + 1);
      } catch (e) {
        alert("Some Problems With Data Fetching");
        console.log(e);
      }
    };
    deleteRecord(id);
  };

  return (
    <div className="row">
      <div
        className="row justify-content-center"
        style={{ marginBottom: "35px" }}
      >
        <h1 className="text-center mb-4">Orders</h1>
      </div>
      <div className="row justify-content-center">
        {loading.current ? (
          <Loader />
        ) : response ? (
          response.map((e, i) => (
            <div
              className="mb-4 bg-light p-4 col-xl-5 ms-4 d-flex flex-column justify-content-between column-ease-in"
              key={i}
              style={{ borderRadius: "15px", border: "1px solid #e8e8e8" }}
            >
              <div>
                <div className="text-center mb-3 fs-3 fw-bold text-decoration-underline">
                  Order #{orderIdRef.current[i]}
                </div>
                {Object.keys(e).map((el, key) => (
                  <div className="row" key={key}>
                    <div className="col-md-6 fs-4 text-center fw-bold border">
                      {el.charAt(0).toUpperCase() + el.slice(1)}
                    </div>
                    <div className="col-md-6 text-start border d-flex align-items-center">
                      {typeof e[el] === "object"
                        ? arrayToNewline(e[el])
                        : e[el]}
                    </div>
                  </div>
                ))}
              </div>
              <div className="d-flex justify-content-center mt-4">
                <button
                  className="btn MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
                  onClick={() => clickHandler(orderIdRef.current[i])}
                >
                  Delete Order
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center fs-3 fw-bold">No orders!</div>
        )}
      </div>
    </div>
  );
};
