import { useLoaderData } from "react-router-dom";
import "./chosenClass.css";
// import ChosenClassLevel from "./class-level";

export const chosenClassLoader = async ({ params }) => {
  const res = await fetch(
    `https://www.dnd5eapi.co/api/classes/${params.index}`
  );
  if (!res.ok) throw new Error("Something went Wrong");
  const data = await res.json();
  return { data };
};

export default function ChosenClass() {
  const { data } = useLoaderData(chosenClassLoader);
  return (
    <>
      <h2>{data.name}</h2>
      {/* Hit Die */}
      <div>
        Starting Hit Die: <span className="hit-die">{data.hit_die}</span>
      </div>
      {/* Start of Proficiency Choices */}
      <div className="proficiency-choices-card">
        <h2>Skills</h2>
        <div>{data.proficiency_choices[0].desc}</div>
        {/* Skill Options */}
        <div className="proficiency-choices">
          {data.proficiency_choices[0].from.options.map((option) => {
            return <button key={option.item.index}>{option.item.name}</button>;
          })}
        </div>
      </div>
      {/* Proficiencies */}
      <div className="proficiency-card">
        <h2>Proficiencies</h2>
        <ul className="proficiency-list">
          {data.proficiencies.map((proficiency) => {
            return (
              <>
                <li key={proficiency.index}>{proficiency.name}</li>
              </>
            );
          })}
        </ul>
      </div>
      {/* Start of Saving Throws */}
      <div className="saving-throws-card">
        <h2>Saving Throws</h2>
        <div className="saving-throws">
          <ul>
            {data.saving_throws.map((saving) => {
              return (
                <>
                  <li key={saving.index}>{saving.name}</li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
      {/* Start of Starting Equipment */}
      <div className="starting-equipment-card">
        <h2>Starting Equipment</h2>
        <div className="starting-equipment">
          <ul>
            {data.starting_equipment.map((equipment) => {
              return (
                <>
                  <li>{equipment.equipment.name}</li>
                </>
              );
            })}
          </ul>
          <h3>Additional Starting Equipment Options</h3>
          <div>
            {data.starting_equipment_options.map((equipment) => {
              // Map over starting equipment options
              return (
                <div key={equipment.desc}>
                  <div>{equipment.desc}</div>
                  <div>
                    {/* Map over equipment to get the names  */}
                    {/* Below does not work */}
                    {/* map over equipment to get the option choices if any */}
                    {/* {equipment.from.option_set_type === "options_array" ? (
                      equipment.from.options.map((option) => {
                        option.option_type === "counted_reference" ? (
                          <button key={option.of.index}>{option.count}</button>
                        ) : (
                          <button key={option.choice.from.equipment_category.index}>
                              {option.choice.desc ? option.choice.desc : 'none'}
                          </button>
                        );
                      })
                    ) : (
                      <button key={equipment.from.equipment_category.index}>
                          {equipment.from.equipment_category.name}
                      </button>
                    )} */}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="class-levels">{/* <ChosenClassLevel /> */}</div>
        </div>
      </div>

      {/* Start of Spells */}
      {data.spellcasting ? (
        <>
          <br />
          <hr />
          <div className="spellcasting">
            <h2>Spellcasting</h2>
            {data.spellcasting.info.map((spells) => {
              return (
                <>
                  <h3 key={spells.name}>{spells.name}</h3>
                  <p>{spells.desc}</p>
                </>
              );
            })}
          </div>
        </>
      ) : null}
    </>
  );
}
