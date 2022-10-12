import { getHeroes } from '../datalayer';
import HeroesPage from '../components/ui/HeroesPage';
import { getHeroesSkills, getHeroesHair, getHeroesEye } from '../datalayer/contentful/heroes';

export default function Index({ heroes, heroSkills, heroHair, heroEye }) {
  return <HeroesPage heroes={heroes} heroSkills={heroSkills} heroHair={heroHair} heroEye={heroEye} />;
}

export const getStaticProps = async (ctx) => {
  const heroes = await getHeroes();
  const heroSkills = await getHeroesSkills();
  const heroHair = await getHeroesHair();
  const heroEye = await getHeroesEye();

  return {
    props: {
      heroes,
      heroSkills,
      heroHair,
      heroEye,
    },
    revalidate: 5,
  };
};
