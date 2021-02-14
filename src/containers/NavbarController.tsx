import { useStore } from "../store/store";
import { Navbar } from "../components/Navbar";

export const NavbarController = () => {
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

  return <Navbar links={links} />;
};
