import { NavigationLink } from "./NavigationLink";
import { NavBrand } from "./NavBrand";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
      <div className="container-fluid">
        <NavBrand />
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <NavigationLink to="/" title="Home" />
          <NavigationLink to="/about" title="About" />
        </ul>
      </div>
    </nav>
  );
};
