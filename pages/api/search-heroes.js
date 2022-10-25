import { searchHeroes, searchCompaniesButReturnHeroes } from "../../datalayer";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default async function handler(req, res) {
  const { searchFormState, sideBarFormState } = req.body;

  // const minBaseSalary =
  //   sideBarFormState.baseSalaryBounds.length > 0
  //     ? Math.min(...sideBarFormState.baseSalaryBounds)
  //     : 0;

  // const maxBaseSalary =
  //   sideBarFormState.baseSalaryBounds.length > 0
  //     ? Math.max(...sideBarFormState.baseSalaryBounds)
  //     : 1000000;

  // const heroTypes = sideBarFormState.heroTypes.map((heroType) =>
  //   capitalizeFirstLetter(heroType)
  // );

  const heroGenders = sideBarFormState.heroGenders.map((gender) =>
    capitalizeFirstLetter(gender)
  );

  const tattoos = sideBarFormState.tattoos.map((heroTattoo) =>
    capitalizeFirstLetter(heroTattoo)
  );

  const heroLooks = sideBarFormState.heroLooks.map((looks) =>
    capitalizeFirstLetter(looks)
  );

  const heroScars = sideBarFormState.heroScars.map((scar) =>
    capitalizeFirstLetter(scar)
  );

  const hairColors = sideBarFormState.hairColors.map((hairColor) =>
    capitalizeFirstLetter(hairColor)
  );
  // const experienceLevels = sideBarFormState.experienceLevels.map(
  //   (experienceLevel) => capitalizeFirstLetter(experienceLevel)
  // );

  const query = {
    ...sideBarFormState,
    searchBarText: searchFormState,
    // minBaseSalary,
    // maxBaseSalary,
    // heroTypes,
    heroGenders,
    tattoos,
    heroLooks,
    heroScars,
    hairColors,
    // experienceLevels,
  };

  console.log(query);

  // search in the jobs entities
  const heroes1 = await searchHeroes(query);

  // seatch in the job entities by company name
  let heroes2 = [];
  if (query.searchBarText) {
    heroes2 = await searchCompaniesButReturnHeroes(query.searchBarText);
  }

  // merge the two results
  let heroes1Ids = heroes1.map((hero) => hero.id);
  heroes2.map((hero2) => {
    if (!heroes1Ids.includes(hero2.id)) {
      heroes1.push(hero2);
    }
  });

  res.status(200).json(heroes1);
}
