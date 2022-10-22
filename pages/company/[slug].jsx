import CompanyDetails from "../../components/data/details/CompanyDetails";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import {
  getCompaniesSlugs,
  getHeroesByCompanyId,
  getCompanyBySlug,
} from "../../datalayer";

const CompanyPage = ({ company, companyHeroes }) => {
  if (!company)
    return <LoadingSpinner customMessage="Loading company data..." />;
  return <CompanyDetails company={company} companyHeroes={companyHeroes} />;
};

export default CompanyPage;

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;
  const company = await getCompanyBySlug({ slug });
  const companyHeroes = await getHeroesByCompanyId({ id: company.id });

  return {
    props: {
      company,
      companyHeroes,
    },
    revalidate: 5,
  };
};

export const getStaticPaths = async () => {
  const slugs = await getCompaniesSlugs();
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return {
    paths: [],
    fallback: false,
  };
};
