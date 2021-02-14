import { NavigationLink } from "./NavigationLink";
import { ICNavbarLink } from "../interfaces/containersInterfaces";

import { NavLink } from "react-router-dom";

export const Navbar = ({ links }: ICNavbarLink) => (
  <nav
    className={`navbar navbar-expand-lg navbar-dark bg-warning main-color Navbar`}
  >
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="/">
        WEBPRICE
      </NavLink>
      <ul className="navbar-nav me-auto mb-0 mb-lg-0 flex-row">
        {links.map(({ to, title, exact }, index) => (
          <NavigationLink key={index} to={to} title={title} exact={exact} />
        ))}
      </ul>
    </div>
  </nav>
);
