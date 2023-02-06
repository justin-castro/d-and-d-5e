export const chosenClassLoader = async () => {
  const res = await fetch(`https://www.dnd5eapi.co/api/classes/}`);
  const classes = await res.json();

  return classes.results;
};
