import date from "date-and-time";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import moment from "moment";

export const dateReducer = (dateStr) => {
  const dateObj = date.parse(dateStr.split("T")[0], "YYYY-MM-DD");
  return dateObj.toDateString();
};

export const richTextReducer = (rawRichtext) => {
  const parsedRichText = documentToHtmlString(rawRichtext);
  let styledRichText = parsedRichText.replace(
    "<ul>",
    "<ul style='list-style-type: circle;'>"
  );
  return styledRichText;
};

export const imageReducer = (imageField) => {
  return {
    url: `https:${imageField.fields.file.url}`,
    alt: imageField.fields.title,
    height: imageField.fields.file.details.image.height,
    width: imageField.fields.file.details.image.width,
    contentType: imageField.fields.file.contentType,
  };
};

export const companyReducer = (rawCompany) => {
  let company = { ...rawCompany.fields };
  company.id = rawCompany.sys.id;
  company.locale = rawCompany.sys.locale;
  company.logo = imageReducer(rawCompany.fields.logo);
  company.coverImage = imageReducer(rawCompany.fields.coverImage);
  return company;
};

export const tagsReducer = (tagsField) => {
  let tags = [];

  tagsField.map((rawTag) => {
    const tag = rawTag.sys.id;
    tags.push(tag);
  });

  //sorting the results alphabetically ;) easy peasy.
  tags.sort();

  return tags;
};

//skillsReducer
export const skillsReducer = (parsedTags) => {
  const skillTags = parsedTags.filter((tag) => tag.includes("skill."));
  const skills = skillTags.map((skillTag) => skillTag.replace("skill.", ""));
  return skills;
};

export const heroReducer = (rawHero, parseRelatedHeroes = true) => {
  let hero = { ...rawHero.fields };

  hero.id = rawHero.sys.id;
  hero.locale = rawHero.sys.locale;
  hero.datePosted = dateReducer(rawHero.fields.datePosted);
  hero.company = companyReducer(rawHero.fields.company);
  hero.aboutYou = richTextReducer(rawHero.fields.aboutYou);
  hero.remunerationPackage = richTextReducer(
    rawHero.fields.remunerationPackage
  );
  hero.jobResponsibilities = richTextReducer(
    rawHero.fields.jobResponsibilities
  );
  hero.heroDescription = richTextReducer(rawHero.fields.heroDescription);
  hero.tags = tagsReducer(rawHero.metadata.tags);
  hero.skills = skillsReducer(hero.tags);
  hero.foto = imageReducer(rawHero.fields.foto);
  hero.age = moment().diff(rawHero.fields.birthday, "year");

  const relatedHeroes = rawHero.fields.relatedHeroes || [];

  if (!parseRelatedHeroes) {
    hero.relatedHeroes = [];
  } else {
    hero.relatedHeroes = relatedHeroes.map((relatedHero) => {
      return heroReducer(relatedHero, false);
    });
  }

  return hero;
};
