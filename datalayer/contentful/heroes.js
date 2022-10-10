import { client } from './client';
import { heroReducer, skillsReducer, tagsReducer } from './utils';

export const getHeroes = async () => {
  const res = await client.getEntries({ content_type: 'heroes' });
  const rawHeroes = res.items;

  const heroes = rawHeroes.map((rawHeroes) => {
    return heroReducer(rawHeroes);
  });
  return heroes;
};

export const getHeroesSkills = async () => {
  const res = await client.getTags();
  const rawTags = res.items;

  const tags = tagsReducer(rawTags);
  const skills = skillsReducer(tags);
  return skills;
};

export const getHeroesSlugs = async () => {
  const rawSlugs = await client.getEntries({
    content_type: 'heroes',
    select: ['fields.slug'],
  });
  const slugs = rawSlugs.items.map((rawSlug) => rawSlug.fields.slug);
  return slugs;
};

export const getHeroBySlug = async ({ slug }) => {
  const found = await client.getEntries({
    content_type: 'heroes',
    'fields.slug': slug,

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
    content_type: 'heroes',
    'fields.company.sys.id': id,
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
    content_type: 'heroes',
    include: 2,
  };


  //continue here--------------------------------

  // Add Equality Query Filters
  if (query.remoteOkOnly)
    contentFullQuery['fields.remoteOk'] = query.remoteOkOnly;
  if (query.featuredJobsOnly)
    contentFullQuery['fields.featuredJob'] = query.featuredJobsOnly;

  // Add Range Query Filters
  contentFullQuery['fields.baseAnnualSalary[gte]'] = query.minBaseSalary;
  contentFullQuery['fields.baseAnnualSalary[lte]'] = query.maxBaseSalary;

  // Add Tags Query Filters
  // we first parse the skills tags back to their contentful-specific version with the "skill." prefix
  const selectedTags = query.selectedTags.map((tag) => `skill.${tag}`);
  if (selectedTags.length)
    contentFullQuery['metadata.tags.sys.id[in]'] = selectedTags.join(',');

  // Add Full Text Search Query
  if (query.searchBarText) {
    contentFullQuery['query'] = query.searchBarText;
  }

  // Add Inclusion Query Filters
  // [DOES NOT WORK]
  // contentful api does NOT have an OR operator: https://www.contentfulcommunity.com/t/delivery-api-or-in-search-query/763
  // contentFullQuery['fields.jobType[in]'] = query.jobTypes;
  // contentFullQuery['fields.experienceLevel[in]'] = query.experienceLevels;

  const res = await client.getEntries(contentFullQuery);
  const foundHeroes = res.items;

  const heroes = foundHeroes.map((rawHero) => {
    return heroReducer(rawHero);
  });

  // Now because contentful doesn't have an OR operator we have to filter at the application level which is not efficient
  let filteredHeroes = heroes.filter((hero) => {
    if (query.experienceLevels.length == 0) return true;
    if (query.experienceLevels.includes(hero.experienceLevel)) return true;
    return false;
  });

  filteredHeroes = filteredHeroes.filter((hero) => {
    if (query.jobTypes.length == 0) return true;
    if (query.jobTypes.includes(job.jobType)) return true;
    return false;
  });

  return filteredHeroes;
};

export const searchCompaniesButReturnHeroes = async (searchBarText) => {
  let contentFullQuery = {
    content_type: 'heroes',
    'fields.company.sys.contentType.sys.id': 'company',
    'fields.company.fields.name[match]': searchBarText,

    // multiple matches are NOT supported by Contentful so we prioritise the company name
    // 'fields.company.fields.city[match]': searchBarText,
    // 'fields.company.fields.slogan[match]': searchBarText,
    // 'fields.company.fields.website[match]': searchBarText,
    include: 2,
  };
  const res = await client.getEntries(contentFullQuery);
  const foundHeroes = res.items;

  const heroes = foundHeroes.map((rawHero) => {
    return heroReducer(rawHero);
  });

  return heroes;
};
