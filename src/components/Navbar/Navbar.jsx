import { NavigationLink } from "./NavigationLink";
import { NavBrand } from "./NavBrand";
import { useStore } from "../../store/store";
import classes from "./Navbar.module.css";

export const Navbar = () => {
  const globalState = useStore();
  const { state } = globalState;

  const isAuthenticated = !!state.token;

  const links = [
    { to: "/", title: "Home", exact: true },
    { to: "/calculator", title: "Calculator", exact: false },
  ];

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
        <NavBrand />
        <ul className="navbar-nav me-auto mb-0 mb-lg-0 flex-row">
          {links.map((e, i) => (
            <NavigationLink key={i} to={e.to} title={e.title} exact={e.exact} />
          ))}
        </ul>
      </div>
    </nav>
  );
};
