export const sortHeroesByDatePosted = ({ heroes, ASC = true }) => {
  // we don't want to modify the original list of jobs provided
  const sorted = [...heroes];
  sorted.sort(function (hero1, hero2) {
    if (hero1.datePosted < hero2.datePosted) return ASC ? -1 : 1;
    else if (hero1.datePosted > hero2.datePosted) return ASC ? 1 : -1;
    else return 0;
  });
  return sorted;
};

export const sortHeroesByBaseAnnualSalary = ({ heroes, ASC = true }) => {
  // we don't want to modify the original list of jobs provided
  const sorted = [...heroes];
  sorted.sort(function (hero1, hero2) {
    if (hero1.baseAnnualSalary < hero2.baseAnnualSalary) return ASC ? -1 : 1;
    else if (hero1.baseAnnualSalary > hero2.baseAnnualSalary) return ASC ? 1 : -1;
    else return 0;
  });
  return sorted;
};

export const sortHeroesByCompanyName = ({ heroes }) => {
  // we don't want to modify the original list of jobs provided
  const sorted = [...heroes];
  sorted.sort(function (hero1, hero2) {
    if (hero1.company.name < hero2.company.name) return -1;
    else if (hero1.company.name > hero2.company.name) return 1;
    else return 0;
  });
  return sorted;
};
