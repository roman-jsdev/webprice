import axios from "axios";
import { Fragment, useEffect, useRef, useState } from "react";
import { Loader } from "../components/Loader/Loader";

export const Orders = () => {
  const [response, setResponse] = useState([]);
  const loading = useRef(true);
  const orderIdRef = useRef([]);
  const [state, setState] = useState(0);

  useEffect(() => {
    const getOrders = async () => {
      const res = await axios.get(
        "https://websit-calculator-react-app-default-rtdb.firebaseio.com/orders.json"
      );
      orderIdRef.current = Object.keys(res.data).map((e) => e.split("-").pop());
      loading.current = false;
      setResponse(Object.keys(res.data).map((e) => res.data[e]));
    };
    getOrders();
  }, []);

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
      await axios.delete(
        `https://websit-calculator-react-app-default-rtdb.firebaseio.com/orders/order-${id}.json`
      );
    };
    deleteRecord(id);
    orderIdRef.current.filter((e) => e !== id);
    setState((prev) => prev + 1);
  };

  return (
    <div className="row">
      <h1 className="text-center mb-4">Orders</h1>
      <div className="row justify-content-center">
        {loading.current ? (
          <Loader />
        ) : (
          response.map((e, i) => (
            <div className="mb-4 bg-light p-4 col-md-5 ms-4" key={i}>
              {Object.keys(e).map((el, key) => (
                <div className="row" key={key}>
                  <div className="col-md-6 fs-4 text-center fw-bold border">
                    {el.charAt(0).toUpperCase() + el.slice(1)}
                  </div>
                  <div className="col-md-6 text-start border d-flex align-items-center">
                    {typeof e[el] === "object" ? arrayToNewline(e[el]) : e[el]}
                  </div>
                </div>
              ))}
              <button
                className="btn btn-danger"
                onClick={() => clickHandler(orderIdRef.current[i])}
              >
                Delete Order
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
