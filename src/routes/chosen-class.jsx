import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export const chosenClassLoader = async ({params}) => {
  const res = await fetch(
    `https://www.dnd5eapi.co/api/classes/${params.index}`
  );
  if (!res.ok) throw new Error("Something went Wrong");
  const data = await res.json();
  return { data };

};
export default function ChosenClass() {
  const { data }  = useLoaderData();
  // console.log(data);
  return (
    <>
      <h2>{data.name}</h2>
      <p>
        Starting Hit Die: <span className="hit-die">{data.hit_die}</span>
      </p>
      <h2>Proficiency Choices</h2>
      <p>{data.proficiency_choices[0].desc}</p>
      <div className="proficiencyChoices">{data.proficiency_choices[0].from.options.map((option) => {
        return <button key={option.item.index}>{ option.item.name }</button>
      })}</div>
      <h2>Proficiencies</h2>
      <ul>
        {data.proficiencies.map((proficiency) => {
          return <li key={proficiency.index}>{ proficiency.name}</li>
        })}
      </ul>
      <h2>Saving Throws</h2>
      <div>{data.saving_throws.map((saving) => {
        return <p key={saving.index}>{saving.name}</p>
      }) }</div>

    </>
  );

}