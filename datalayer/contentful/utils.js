import date from "date-and-time";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

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

// hairReducer
export const hairReducer = (parsedTags) => {
  const hairTags = parsedTags.filter((tag) => tag.includes("hair."));
  const hair = hairTags.map((hairTag) => hairTag.replace("hair.", ""));
  return hair;
};

// eyeReducer
export const eyeReducer = (parsedTags) => {
  const eyeTags = parsedTags.filter((tag) => tag.includes("eye."));
  const eye = eyeTags.map((eyeTag) => eyeTag.replace("eye.", ""));
  return eye;
};

// tattooReducer
export const tattooReducer = (parsedTags) => {
  const tattooTags = parsedTags.filter((tag) => tag.includes("tattoo."));
  const tattoo = tattooTags.map((tattooTag) =>
    tattooTag.replace("tattoo.", "")
  );
  return tattoo;
};

// scarReducer
export const scarsReducer = (parsedTags) => {
  const scarsTags = parsedTags.filter((tag) => tag.includes("scars."));
  const scars = scarsTags.map((scarsTag) => scarsTag.replace("scars.", ""));
  return scars;
};

// sexReducer
export const sexReducer = (parsedTags) => {
  const sexTags = parsedTags.filter((tag) => tag.includes("sex."));
  const sex = sexTags.map((sexTag) => sexTag.replace("sex.", ""));
  return sex;
};

// invoiceReducer
export const invoiceReducer = (parsedTags) => {
  const invoiceTags = parsedTags.filter((tag) => tag.includes("invoice."));
  const invoice = invoiceTags.map((invoiceTag) =>
    invoiceTag.replace("invoice.", "")
  );
  return invoice;
};

// driveReducer
export const driveReducer = (parsedTags) => {
  const driveTags = parsedTags.filter((tag) => tag.includes("drive."));
  const drive = driveTags.map((driveTag) => driveTag.replace("drive.", ""));
  return drive;
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
  hero.hair = hairReducer(hero.tags);
  hero.eye = eyeReducer(hero.tags);
  hero.tattoo = tattooReducer(hero.tags);
  hero.scars = scarsReducer(hero.tags);
  hero.sex = sexReducer(hero.tags);
  hero.invoice = invoiceReducer(hero.tags);
  hero.drive = driveReducer(hero.tags);
  hero.foto = imageReducer(rawHero.fields.foto);

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
