import { useLoaderData } from "react-router-dom";

export const chosenClassLevelLoader = async ({ params }) => {
  const res = await fetch(
    `https://www.dnd5eapi.co/api/classes/${params.index}/levels`
  );
  if (!res.ok) throw new Error("Something went Wrong");
  const level = await res.json();
  return { level };
}

export default function ChosenClassLevel() { 
    const { level } = useLoaderData();
    return (
        <div className="chosenClassLevel">
            {console.log(level)}
        </div>

    )
}
