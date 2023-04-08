import { Navigate, useLoaderData } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import ChosenClassLevel from "./class-level";

export const chosenFeatLoader = async ({ params }) => {
  const res = await fetch(
    `https://www.dnd5eapi.co/api/features/${params.index}`
  );
  if (!res.ok) throw new Error("Something went Wrong");
  const data = await res.json();
  return { data };
};

export default function ChosenFeat() {
  const { data } = useLoaderData(chosenFeatLoader);
  return (
    <>
      <h1>{data.name}</h1>
      <h2>Description</h2>
      <p>{data.desc}</p>
      <h2>Class</h2>
      <NavLink to={'../class/' + data.class.index}>{data.class.name}</NavLink>
      <h2>Prerequisites</h2>
      <p>{data.prerequisites[0] ? data.prerequisites : "None"}</p>
    </>
  );
}
