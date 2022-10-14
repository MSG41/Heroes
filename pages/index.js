import { getHeroes } from '../datalayer';
import HeroesPage from '../components/ui/HeroesPage';
import { getHeroesSkills, getHeroesHair, getHeroesEye, getHeroesTattoo, getHeroesScars, getHeroesSex, getHeroesInvoice, getHeroesDrive } from '../datalayer/contentful/heroes';

export default function Index({ heroes, heroSkills, heroHair, heroEye, heroTattoo, heroScars, heroSex, heroInvoice, heroDrive }) {
  return <HeroesPage heroes={heroes} heroSkills={heroSkills} heroHair={heroHair} heroEye={heroEye} heroTattoo={heroTattoo} heroScars={heroScars} heroSex={heroSex} heroInvoice={heroInvoice} heroDrive={heroDrive} />;
}

export const getStaticProps = async (ctx) => {
  const heroes = await getHeroes();
  const heroSkills = await getHeroesSkills();
  const heroHair = await getHeroesHair();
  const heroEye = await getHeroesEye();
  const heroTattoo = await getHeroesTattoo();
  const heroScars = await getHeroesScars();
  const heroSex = await getHeroesSex();
  const heroInvoice = await getHeroesInvoice();
  const heroDrive = await getHeroesDrive();

  return {
    props: {
      heroes,
      heroSkills,
      heroHair,
      heroEye,
      heroTattoo,
      heroScars,
      heroSex,
      heroInvoice,
      heroDrive,
    },
    revalidate: 9,
  };
};
