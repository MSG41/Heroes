import { getHeroesSlugs, getHeroBySlug } from '../../datalayer';
import HeroDetails from '../../components/data/details/HeroDetails';
import LoadingSpinner from '../../components/ui/LoadingSpinner';

const HeroDetailsPage = ({ hero }) => {
  if(!hero) return <LoadingSpinner customMessage='Loading hero data...' />
  return <HeroDetails hero={hero} />;
};
export default HeroDetailsPage;

export const getStaticPaths = async () => {
  const slugs = await getHeroesSlugs();
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;
  const hero = await getHeroBySlug({ slug });
  return {
    props: {
      hero,
    },
    revalidate: 5,
  };
};
