import Header from "./Header";
// import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="xl:w-screen-2xl xl:flex xl:justify-center xl:mx-auto  sm:px-6 lg:px-8 bg-slate-50 m-2 p-2">
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
