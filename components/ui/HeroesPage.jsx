/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import HeroesList from "../data/lists/HeroesList";
import SearchHeroForm from "../forms/SearchHeroForm";
import HeroesPageSideBarForm from "../forms/HeroesPageSideBarForm";
import HeroesSortForm from "../forms/HeroesSortForm";

export default function HeroesPage({ heroes, heroSkills }) {
  const [displayedHeroes, setDisplayedHeroes] = useState(heroes);

  const [sideBarFormState, setSideBarFormState] = useState({
    heroInvoices: [],
    heroGenders: [],
    continents: [],
    countries: [],
    tattoos: [],
    heroLooks: [],
    heroScars: [],
    hairColors: [],
    eyeColors: [],
    sizes: [],
    drivers: [],
    agencies: [],
    selectedTags: [],
  });

  const [searchFormState, setSearchFormState] = useState("");

  const searchHeroes = async (apiUrl, formsStates) => {
    // console.log("these are the formsStates sent to the back-end", formsStates);
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formsStates),
    });
    const foundHeroes = await response.json();
    console.log(foundHeroes);
    setDisplayedHeroes(foundHeroes);
  };

  const initialRender1 = useRef(true);
  // trigger a search whenever the sidebar form state  changes
  useEffect(() => {
    // console.log("this is the effect");
    if (initialRender1.current) {
      initialRender1.current = false;
    } else {
      console.log("sidebar state form changed => triggering a search");
      const formsStates = { searchFormState, sideBarFormState };
      searchHeroes("api/search-heroes", formsStates);
    }
  }, [sideBarFormState]);

  const initialRender2 = useRef(true);
  // trigger a search whenever the search form state changes && length >= 3 -OR- length == 0 (implying a reset)
  useEffect(() => {
    if (initialRender2.current) {
      initialRender2.current = false;
    } else {
      console.log(
        "search form changed && length >= 2 OR ==0 => triggering a search"
      );
      if (searchFormState.length >= 2 || searchFormState.length == 0) {
        const formsStates = { searchFormState, sideBarFormState };
        searchHeroes("api/search-heroes", formsStates);
      }

      if (searchFormState.length >= 2 || searchFormState.length == 0) {
        const formsStates = { searchFormState, sideBarFormState };
        searchHeroes("api/search-heroes", formsStates);
      }
    }
  }, [searchFormState]);

  let heroesFoundMessage = `Found ${displayedHeroes.length} Heroes`;
  switch (displayedHeroes.length) {
    case 0: {
      heroesFoundMessage = "No Heroes found.";
      break;
    }
    case 1: {
      heroesFoundMessage = "Only one Hero found.";
      break;
    }
    case 100: {
      heroesFoundMessage = "Please use the filter to find your heroes!";
      break;
    }

    default:
      break;
  }

  // skillTag delete
  const handleSkillTagDelete = (e, skillTag) => {
    e.preventDefault();
    setSideBarFormState((prevState) => {
      return {
        ...prevState,
        selectedTags: prevState.selectedTags.filter((tag) => skillTag != tag),
      };
    });
  };

  return (
    <div className="w-[100%] mt-[-100px]">
      <div className=" xl:sticky xl:left-[1.7em] xl:top-[0.25em] xl:mt-[12vh] md:mt-10 xl:mb-[-14vh]  text-sm text-white italic xs:sticky xs:mt-[10vh] xs:left-[63%] md:left-[80%] md:top-5 xs:pl-4 xs:pr-4 xs:text-[170%] xs:pt-3 xs:pb-3  xl:text-[170%] xs:sticky xs:top-[2.7em] xs:z-[999] xs:bg-gradient-to-r from-indigo-500/60 via-emerald-500/90 to-yellow-500/90 hover:from-pink-500 xs:hover:to-yellow-500 xs:rounded-full xs:w-fit">
        {heroesFoundMessage}
      </div>
      <div className=" xl:invisible md:z-10 lg:sticky  lg:z-10 md:mt-12  md:z-10  xs:z-10 xs:mt-[3.5vh] ">
        <SearchHeroForm
          searchFormState={searchFormState}
          setSearchFormState={setSearchFormState}
          setdisplayedHeroes={setDisplayedHeroes}
        />
      </div>
      <div className="flex flex-col space-y-10 sm:flex-row sm:space-x-6 sm:space-y-0 md:flex-col md:space-x-0 md:space-y-10 xl:flex-row xl:space-x-6 xl:space-y-0 mt-9">
        <HeroesPageSideBarForm
          heroSkills={heroSkills}
          sideBarFormState={sideBarFormState}
          setSideBarFormState={setSideBarFormState}
          setdisplayedHeroes={setDisplayedHeroes}
        />
        <div className="md:max-w-screen xl:w-[70%] align-center ">
          <div className="lg:sticky lg:top-5 lg:z-10 md:sticky md:top-5 md:z-10 xs:sticky xs:top-5 xs:z-10 ">
            <SearchHeroForm
              searchFormState={searchFormState}
              setSearchFormState={setSearchFormState}
              setdisplayedHeroes={setDisplayedHeroes}
            />
          </div>
          {/* Heroes header */}
          <div className="flex justify-between items-center mb-4  ">
            {/* Number of heroes found message  */}
            <div className="xs:invisible text-sm text-slate-500 italic ">
              {heroesFoundMessage}
            </div>

            {/* skills tags */}
            <div>
              <div className="flex flex-wrap items-center -m-1 max-w-2xl">
                {sideBarFormState.selectedTags &&
                  sideBarFormState.selectedTags.map((skill) => (
                    <div className="m-1" key={skill}>
                      <a
                        className="text-xs hover:scale-110  hover:bg-red-100 hover:text-red-600 inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1"
                        href="#"
                      >
                        {skill}
                        <svg
                          className="h-2 w-2 ml-2 mt-1 text-sm hover:cursor-pointer"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 8 8"
                          onClick={(e) => handleSkillTagDelete(e, skill)}
                        >
                          <path
                            strokeLinecap="round"
                            strokeWidth="1.5"
                            d="M1 1l6 6m0-6L1 7"
                          />
                        </svg>
                      </a>
                    </div>
                  ))}
              </div>
            </div>

            {/* Sort */}
            <HeroesSortForm
              heroes={displayedHeroes}
              setDisplayedHeroes={setDisplayedHeroes}
            />
          </div>

          <HeroesList heroes={displayedHeroes} />
        </div>
      </div>
    </div>
  );
}
