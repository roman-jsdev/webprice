import { center, LoaderSpinner } from "./Loader.module.css";

export const Loader = () => (
  <div className={center}>
    <div className={LoaderSpinner}></div>
  </div>
);
