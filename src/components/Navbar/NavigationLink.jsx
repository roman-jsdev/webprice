import { NavLink } from "react-router-dom";

export const NavigationLink = (props) => {
  return (
    <li className="nav-item">
      <NavLink
        className="nav-link"
        exact
        to={props.to}
        activeClassName="active"
      >
        {props.title}
      </NavLink>
    </li>
  );
};
