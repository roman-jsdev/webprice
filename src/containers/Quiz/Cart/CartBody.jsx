import { useCartList } from "./CartListContext";

export const CartBody = () => {
  const cartList = useCartList();

  return (
    <ul className="list-group pt-4">
      {cartList.list.length
        ? cartList.list.map((item, index) => {
            return (
              <li key={index} className="list-group-item" aria-current="true">
                <i className="fas fa-check me-3"></i>

                {item}
              </li>
            );
          })
        : null}
      {cartList.item.length ? (
        <li className="list-group-item" aria-current="true">
          <i className="fas fa-check me-3"></i>
          {cartList.item}
        </li>
      ) : null}
    </ul>
  );
};
