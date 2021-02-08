import { NavLink } from "react-router-dom";

export const NavigationLink = ({ exact, to, title }) => (
  <li className="nav-item ms-3">
    <NavLink
      className="nav-link"
      exact={exact}
      to={to}
      activeClassName="active"
    >
      {title}
    </NavLink>
  </li>
);
