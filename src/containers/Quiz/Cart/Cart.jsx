export const Cart = (props) => {
  return (
    <div
      className="col-12 pb-4 col-lg-3 offset-lg-1 offset-sm-0 border"
      style={{ height: "fit-content" }}
    >
      {props.children}
    </div>
  );
};
