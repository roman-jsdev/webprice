import { useEffect, useState } from "react";

import { useDB } from "../hooks/useDB";
import { getOrderBody, getOrderId } from "../utils";
import { OrdersGrid } from "../components/OrdersGrid";

export const Orders = () => {
  const [response, setResponse] = useState<(object | never)[]>([]);
  const [orderId, setOrderId] = useState<string[]>([]);
  const [getOrders, isLoading, responseOrders] = useDB("get", "orders");
  const [deleteOrderFromDB] = useDB("delete");

  useEffect(() => {
    if (isLoading) getOrders();
    if (!isLoading && responseOrders) {
      if (responseOrders.data) {
        const id = getOrderId(responseOrders.data);
        setOrderId(id);
        setResponse(getOrderBody(responseOrders.data));
      } else {
        setResponse([]);
      }
    }
  }, [isLoading]);

  const deleteOrder = (deletingId: string) => {
    deleteOrderFromDB({}, `orders/order-${deletingId}`);
    const FilteredOrders = [...response];
    FilteredOrders.splice(orderId.indexOf(deletingId), 1);
    setOrderId(orderId.filter((id) => id !== deletingId));
    setResponse(FilteredOrders);
  };

  return (
    <OrdersGrid
      isLoading={isLoading}
      response={response}
      orderId={orderId}
      deleteOrder={deleteOrder}
    />
  );
};
