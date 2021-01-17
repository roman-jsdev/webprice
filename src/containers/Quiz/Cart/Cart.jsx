export const Cart = (props) => {
  return (
    <div
      className="col-12 pb-4 col-xl-3 offset-xl-1 offset-sm-0 border"
      style={{
        height: "fit-content",
        borderRadius: "15px",
        overflow: "hidden",
      }}
    >
      {props.children}
    </div>
  );
};
