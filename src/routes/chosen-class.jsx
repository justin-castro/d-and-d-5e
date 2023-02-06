import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export default function ChosenClass() {
  const classes = useLoaderData();
  console.log(classes);
  return(
    <div>Chosen Class</div>
  )

}
export async function chosenClassLoader() {
  const params = useParams().index;
  const res = await fetch(
    `https://www.dnd5eapi.co/api/classes/${params}`
  );
  const classes = await res.json();

  return classes;
};