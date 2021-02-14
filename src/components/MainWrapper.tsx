import { IChildren } from "../interfaces/defaultInterfaces";

export const MainWrapper = ({ children }: IChildren) => (
  <main>
    <div className="container pt-4">{children}</div>
  </main>
);
