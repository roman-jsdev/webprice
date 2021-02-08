import { NavigationLink } from "@components/NavigationLink";
import { useStore } from "@store/store";
import classes from "./Navbar.module.css";

import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const {
    state: { token: isAuthenticated },
  } = useStore();

  const links = [{ to: "/", title: "Home", exact: true }];

  if (isAuthenticated) {
    links.push({ to: "/orders", title: "Orders", exact: false });
    links.push({ to: "/logout", title: "Logout", exact: false });
  } else {
    links.push({ to: "/login", title: "Login", exact: false });
  }

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-warning main-color ${classes.Navbar}`}
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          WEBPRICE
        </NavLink>
        <ul className="navbar-nav me-auto mb-0 mb-lg-0 flex-row">
          {links.map(({to, title, exact}, index) => (
            <NavigationLink
              key={index}
              to={to}
              title={title}
              exact={exact}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};
