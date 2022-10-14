import { getHeroes } from '../datalayer';
import HeroesPage from '../components/ui/HeroesPage';
import { getHeroesSkills, getHeroesHair, getHeroesEye, getHeroesTattoo } from '../datalayer/contentful/heroes';

export default function Index({ heroes, heroSkills, heroHair, heroEye, heroTattoo }) {
  return <HeroesPage heroes={heroes} heroSkills={heroSkills} heroHair={heroHair} heroEye={heroEye} heroTattoo={heroTattoo} />;
}

export const getStaticProps = async (ctx) => {
  const heroes = await getHeroes();
  const heroSkills = await getHeroesSkills();
  const heroHair = await getHeroesHair();
  const heroEye = await getHeroesEye();
  const heroTattoo = await getHeroesTattoo();

  return {
    props: {
      heroes,
      heroSkills,
      heroHair,
      heroEye,
      heroTattoo,
    },
    revalidate: 5,
  };
};
