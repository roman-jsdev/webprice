import { useCartList } from "@context/CartListContext";

export const CartBody = () => {
  const { currentList } = useCartList();

  return (
    <ul className="list-group pt-4">
      {currentList.length
        ? currentList.map((item, index) => (
            <li key={index} className="list-group-item" aria-current="true">
              <i className="fas fa-check me-3" />
              {item}
            </li>
          ))
        : null}
    </ul>
  );
};
