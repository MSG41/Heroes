import "../styles/globals.css";
import Layout from "../components/globals/Layout";
import ScrollButton from "../components/ScrollButton/ScrollButton";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ScrollButton />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
