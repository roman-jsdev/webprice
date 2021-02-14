import { IChildren } from "../interfaces/defaultInterfaces";

export const Cart = ({ children }: IChildren) => (
  <div
    className="col-12 pb-4 col-xl-3 offset-xl-1 offset-sm-0 border"
    style={{
      height: "max-content",
      borderRadius: "15px",
      overflow: "hidden",
    }}
  >
    {children}
  </div>
);
