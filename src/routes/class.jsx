import { useLoaderData } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import './class.css'

export default function Classes() {
    const classes = useLoaderData()
    return (
      <>
        <h1>Classes</h1>
        <div>Choose a Class to learn more</div>
        <nav className="characterNavigation">
          <ul className="characterList">
            {classes.map((item, index) => {
                return (
                    <NavLink to={item.index} key={index}>{item.name}</NavLink>
                );
            })}
          </ul>
            </nav>
            <Outlet />
      </>
    );
};

export const classLoader = async () => {
    const res = await fetch("https://www.dnd5eapi.co/api/classes");
    const classes = await res.json()

    return classes.results;
}