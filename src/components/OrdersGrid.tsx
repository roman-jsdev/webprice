import { splitArrayToNewLine } from "../utils";
import { Loader } from "./Loader";
import { IOrdersGridProps } from "../interfaces/componentsInterfaces";

export const OrdersGrid = ({
  isLoading,
  response,
  orderId,
  deleteOrder,
}: IOrdersGridProps) => (
  <div className="row">
    <div
      className="row justify-content-center"
      style={{ marginBottom: "35px" }}
    >
      <h1 className="text-center mb-4">Orders</h1>
    </div>
    <div className="row justify-content-center">
      {isLoading ? (
        <Loader />
      ) : response.length ? (
        response.map((order, index) => (
          <div
            className="mb-4 bg-light p-4 col-xl-5 ms-4 d-flex flex-column justify-content-between column-ease-in"
            key={index}
            style={{ borderRadius: "15px", border: "1px solid #e8e8e8" }}
          >
            <div>
              <div className="text-center mb-3 fs-3 fw-bold text-decoration-underline">
                Order #{orderId[index]}
              </div>
              {Object.keys(order).map((orderElement, key) => (
                <div className="row" key={key}>
                  <div className="col-md-6 fs-4 text-center fw-bold border">
                    {orderElement.charAt(0).toUpperCase() +
                      orderElement.slice(1)}
                  </div>
                  <div className="col-md-6 text-start border d-flex align-items-center">
                    {typeof order[orderElement as keyof typeof order] ===
                    "object"
                      ? splitArrayToNewLine(
                          order[orderElement as keyof typeof order]
                        )
                      : order[orderElement as keyof typeof order]}
                  </div>
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-center mt-4">
              <button
                className="btn MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
                onClick={() => deleteOrder(orderId[index])}
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
