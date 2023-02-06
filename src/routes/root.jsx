import { NavLink, Outlet } from "react-router-dom";
import './root.css'

export default function Root() {
  return (
    <>
      <nav className="top-navigation">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="class">Classes</NavLink>
          </li>
          <li>
            <NavLink to="feat">Feats</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
