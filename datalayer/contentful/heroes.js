import { client } from "./client";
import { heroReducer, skillsReducer, tagsReducer } from "./utils";
import moment from "moment";

export const getHeroes = async () => {
  const res = await client.getEntries({
    content_type: "heroes",
    limit: 1000,
  });
  const rawHeroes = res.items;

  const heroes = rawHeroes.map((rawHeroes) => {
    return heroReducer(rawHeroes);
  });
  return heroes;
};

//  Get Hero Skills
export const getHeroesSkills = async () => {
  const res = await client.getTags();
  const rawTags = res.items;

  const tags = tagsReducer(rawTags);
  const skills = skillsReducer(tags);
  return skills;
};

export const getHeroesSlugs = async () => {
  const rawSlugs = await client.getEntries({
    content_type: "heroes",
    select: ["fields.slug"],
  });
  const slugs = rawSlugs.items.map((rawSlug) => rawSlug.fields.slug);
  return slugs;
};

export const getHeroBySlug = async ({ slug }) => {
  const found = await client.getEntries({
    content_type: "heroes",
    "fields.slug": slug,

    // needed to fetch linked items, otherwise job.fields.relatedJobs[0].fields.company.fields is undefined
    // https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/links/retrieval-of-linked-items
    include: 2,
  });

  if (found.items.length == 0) return null;
  const hero = found.items[0];
  return heroReducer(hero);
};

export const getHeroesByCompanyId = async ({ id }) => {
  const res = await client.getEntries({
    content_type: "heroes",
    "fields.company.sys.id": id,
    include: 2,
  });

  const rawHeroes = res.items;
  const Heroes = rawHeroes.map((rawHero) => {
    return heroReducer(rawHero);
  });
  return Heroes;
};

export const searchHeroes = async (query) => {
  let contentFullQuery = {
    content_type: "heroes",
    include: 5,
    limit: 1000,
  };

  // console.log("this is what I'm looking for; query=", query);
  //continue here--------------------------------

  // Add Range Query Filters for Shoe Size:
  contentFullQuery["fields.shoeSize[gte]"] = query.minShoeSize;
  contentFullQuery["fields.shoeSize[lte]"] = query.maxShoeSize;

  // Add Range Query Filters for Height:
  contentFullQuery["fields.height[gte]"] = query.minHeight;
  contentFullQuery["fields.height[lte]"] = query.maxHeight;
  // console.log("this is the query.maxHeight", query.maxHeight);

  // -------------------- AGE ------------------------------

  contentFullQuery["fields.birthday[lte]"] = query.agemin;
  var oldest = moment().subtract(query.agemin, "years").format("YYYY-MM-DD");
  // console.log(oldest, "This is the oldest");
  // console.log(query.agemax, "This is agemax");

  contentFullQuery["fields.birthday[gte]"] = query.agemax;
  var youngest = moment().subtract(query.agemax, "years").format("YYYY-MM-DD");
  // console.log(youngest, "This is the youngest");
  // console.log(query.agemin, "This is agemin");

  // -------------------- AGE ------------------------------

  // we first parse the skills tags back to their contentful-specific version with the "skill." prefix
  const selectedTags = query.selectedTags.map((tag) => `skill.${tag}`);
  if (selectedTags.length)
    contentFullQuery["metadata.tags.sys.id[in]"] = selectedTags.join(",");

  // Add Full Text Search Query
  if (query.searchBarText) {
    contentFullQuery["query"] = query.searchBarText;
  }

  const res = await client.getEntries(contentFullQuery);
  const foundHeroes = res.items;

  const heroes = foundHeroes.map((rawHero) => {
    return heroReducer(rawHero);
  });

  // Now because contentful doesn't have an OR operator we have to filter at the application level which is not efficient
  let filteredHeroes = heroes.filter((hero) => {
    if (query.tattoos.length == 0) return true;
    if (query.tattoos.includes(hero.heroTattoo)) return true;
    return false;
  });

  filteredHeroes = filteredHeroes.filter((hero) => {
    if (query.heroGenders.length == 0) return true;
    if (query.heroGenders.includes(hero.gender)) return true;
    return false;
  });

  filteredHeroes = filteredHeroes.filter((hero) => {
    if (query.heroLooks.length == 0) return true;
    if (query.heroLooks.includes(hero.looks)) return true;
    return false;
  });

  filteredHeroes = filteredHeroes.filter((hero) => {
    if (query.heroScars.length == 0) return true;
    if (query.heroScars.includes(hero.scar)) return true;
    return false;
  });

  filteredHeroes = filteredHeroes.filter((hero) => {
    if (query.hairColors.length == 0) return true;
    if (query.hairColors.includes(hero.hairColor)) return true;
    return false;
  });

  filteredHeroes = filteredHeroes.filter((hero) => {
    if (query.eyeColors.length == 0) return true;
    if (query.eyeColors.includes(hero.eyeColor)) return true;
    return false;
  });
  filteredHeroes = filteredHeroes.filter((hero) => {
    if (query.sizes.length == 0) return true;
    if (query.sizes.includes(hero.standardSize)) return true;
    return false;
  });
  filteredHeroes = filteredHeroes.filter((hero) => {
    if (query.heroInvoices.length == 0) return true;
    if (query.heroInvoices.includes(hero.heroInvoice)) return true;
    return false;
  });
  filteredHeroes = filteredHeroes.filter((hero) => {
    if (query.drivers.length == 0) return true;
    if (query.drivers.includes(hero.driver)) return true;
    return false;
  });
  filteredHeroes = filteredHeroes.filter((hero) => {
    if (query.agencies.length == 0) return true;
    if (query.agencies.includes(hero.otherAgency)) return true;
    return false;
  });
  filteredHeroes = filteredHeroes.filter((hero) => {
    if (query.continents.length == 0) return true;
    if (query.continents.includes(hero.continent)) return true;
    return false;
  });
  filteredHeroes = filteredHeroes.filter((hero) => {
    if (query.countries.length == 0) return true;
    if (query.countries.includes(hero.country)) return true;
    return false;
  });

  return filteredHeroes;
};

export const searchCompaniesButReturnHeroes = async (searchBarText) => {
  let contentFullQuery = {
    content_type: "heroes",
    "fields.company.sys.contentType.sys.id": "company",
    "fields.company.fields.name[match]": searchBarText,
    include: 2,
    limit: 1000,
  };
  const res = await client.getEntries(contentFullQuery);
  const foundHeroes = res.items;

  const heroes = foundHeroes.map((rawHero) => {
    return heroReducer(rawHero);
  });

  return heroes;
};
