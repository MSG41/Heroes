import { getHeroes } from "../datalayer";
import HeroesPage from "../components/ui/HeroesPage";
// import InfiniteScroll from "react-infinite-scroll-component";
import { getHeroesSkills } from "../datalayer/contentful/heroes";

export default function Index({ heroes, heroSkills }) {
  return <HeroesPage heroes={heroes} heroSkills={heroSkills} />;
}

export const getStaticProps = async (ctx) => {
  const heroes = await getHeroes();
  const heroSkills = await getHeroesSkills();

  return {
    props: {
      heroes,
      heroSkills,
    },
    revalidate: 2,
  };
};
