import { getHeroes } from '../datalayer';
import HeroesPage from '../components/ui/HeroesPage';
import { getHeroesSkills, getHeroesHair } from '../datalayer/contentful/heroes';

export default function Index({ heroes, heroSkills, heroHair }) {
  return <HeroesPage heroes={heroes} heroSkills={heroSkills} heroHair={heroHair} />;
}

export const getStaticProps = async (ctx) => {
  const heroes = await getHeroes();
  const heroSkills = await getHeroesSkills();
  const heroHair = await getHeroesHair();

  return {
    props: {
      heroes,
      heroSkills,
      heroHair,
    },
    revalidate: 5,
  };
};
