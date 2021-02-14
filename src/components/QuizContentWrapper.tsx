import { IChildren } from "../interfaces/defaultInterfaces";

export const QuizContentWrapper = ({ children }: IChildren) => (
  <div className="row py-4 px-3 FullWidth">{children}</div>
);
