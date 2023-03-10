import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import ChosenClassLevel from "./class-level";

export const chosenClassLoader = async ({ params }) => {
  const res = await fetch(
    `https://www.dnd5eapi.co/api/classes/${params.index}`
  );
  if (!res.ok) throw new Error("Something went Wrong");
  const data = await res.json();
  return { data };
};
export default function ChosenClass() {
  const { data } = useLoaderData();
  // console.log(data);
  return (
    <>
      <h2>{data.name}</h2>
      <p>
        Starting Hit Die: <span className="hit-die">{data.hit_die}</span>
      </p>
      <div className="proficiency-choices-card">
        <h2>Proficiency Choices</h2>
        <p>{data.proficiency_choices[0].desc}</p>
        {/* <form className="proficiency-choices">
          <select name="" id="">
            {data.proficiency_choices[0].from.options.map((option) => {
              return (
                <option key={option.item.index}>{option.item.name}</option>
              );
            })}
          </select>
          <select name="" id="">
            {data.proficiency_choices[0].from.options.map((option) => {
              return (
                <option key={option.item.index}>{option.item.name}</option>
              );
            })}
          </select>
        </form> */}
        <div className="proficiency-choices">
          {data.proficiency_choices[0].from.options.map((option) => {
            return <button key={option.item.index}>{option.item.name}</button>;
          })}
        </div>
      </div>
      <div className="proficiency-card">
        <h2>Proficiencies</h2>
        <ul className="proficiency-list">
          {data.proficiencies.map((proficiency) => {
            return <li key={proficiency.index}>{proficiency.name}</li>;
          })}
        </ul>
      </div>
      <div className="saving-throws-card">
        <h2>Saving Throws</h2>
        <div className="saving-throws">
          {data.saving_throws.map((saving) => {
            return <p key={saving.index}>{saving.name}</p>;
          })}
        </div>
      </div>
      <div className="starting-equipment-card">
        <h2>Starting Equipment</h2>
        <div className="starting-equipment">
          {data.starting_equipment.map((equipment) => {
            return <p>{equipment.equipment.name}</p>;
          })}
          <h3>Additional Starting Equipment Options</h3>
          <div>
            {data.starting_equipment_options.map((equipment) => {
              return (
                <div key={equipment.desc}>
                  <p>{equipment.desc}</p>
                  <div>
                    {/* Map over equipment to get the names  */}
                    {/* Below does not work */}
                    {/* {equipment.from.options
                      ? equipment.from.options.map((option) => {
                          return <button>{option.count}</button>;
                        })
                      : <p/>} */}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="class-levels">
            {/* <ChosenClassLevel /> */}
          </div>
        </div>
      </div>
    </>
  );
}
