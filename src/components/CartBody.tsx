import { useCartList } from "../context/CartListContext";

export const CartBody = () => {
  const { currentList } = useCartList();

  return (
    <ul className="list-group pt-4">
      {currentList.length
        ? (currentList as (string | never)[]).map((cartListItem, index) => (
            <li key={index} className="list-group-item" aria-current="true">
              <i className="fas fa-check me-3" />
              {cartListItem}
            </li>
          ))
        : null}
    </ul>
  );
};
