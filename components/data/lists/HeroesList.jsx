import React from "react";
import HeroCard from "../cards/HeroCard";

const HeroesList = ({ heroes }) => {
  return (
    <div>
      {heroes.map((hero) => (
        <HeroCard hero={hero} key={hero.id} />
      ))}
    </div>
  );
};

export default HeroesList;
