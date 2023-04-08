import { useLoaderData } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";

export default function Feats() {
  const feats = useLoaderData()
  return (
    <>
      <h1>Feats</h1>
      <div>{feats.map((item, index) => {
        return (
          <>
            <NavLink to={item.index} key={index}>
              {item.name}
            </NavLink>
            <br />
            </>
        );
      })}</div>
    </>
  );
}

export const featLoader = async () => {
  const res = await fetch("https://www.dnd5eapi.co/api/features");
  const feats = await res.json();

  return feats.results
}