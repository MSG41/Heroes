/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import HeroesList from "../data/lists/HeroesList";
import SearchHeroForm from "../forms/SearchHeroForm";
import HeroesPageSideBarForm from "../forms/HeroesPageSideBarForm";
import HeroesSortForm from "../forms/HeroesSortForm";

export default function HeroesPage({
  heroes,
  heroSkills,
  heroHair,
  heroEye,
  heroTattoo,
  heroScars,
  heroSex,
  heroInvoice,
  heroDrive,
}) {
  const [displayedHeroes, setDisplayedHeroes] = useState(heroes);

  const [sideBarFormState, setSideBarFormState] = useState({
    // heroTypes: [],
    heroGenders: [],
    tattoos: [],
    heroLooks: [],
    heroScars: [],
    hairColors: [],
    eyeColors: [],
    sizes: [],
    // experienceLevels: [],
    // remoteOkOnly: false,
    // featuredHeroesOnly: false,
    // baseSalaryOptions: [],
    // baseSalaryBounds: [],
    selectedTags: [],
    selectedHairTags: [],
    selectedEyeTags: [],
    selectedTattooTags: [],
    selectedScarsTags: [],
    selectedSexTags: [],
    selectedInvoiceTags: [],
    selectedDriveTags: [],
  });

  const [searchFormState, setSearchFormState] = useState("");

  const searchHeroes = async (apiUrl, formsStates) => {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formsStates),
      // content_type: 'heroes',
      // limit: 1000,
    });
    const foundHeroes = await response
      .json
      // content_type: 'heroes',
      // limit: 1000,
      ();
    console.log(foundHeroes);
    setDisplayedHeroes(foundHeroes);
  };

  const initialRender1 = useRef(true);
  // trigger a search whenever the sidebar form state  changes
  useEffect(() => {
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
        "search form changed && length >= 3 OR ==0 => triggering a search"
      );
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

  // hairTag delete
  const handleHairTagDelete = (e, hairTag) => {
    e.preventDefault();
    setSideBarFormState((prevState) => {
      return {
        ...prevState,
        selectedHairTags: prevState.selectedHairTags.filter(
          (tag) => hairTag != tag
        ),
      };
    });
  };

  // eyeTag delete
  const handleEyeTagDelete = (e, eyeTag) => {
    e.preventDefault();
    setSideBarFormState((prevState) => {
      return {
        ...prevState,
        selectedEyeTags: prevState.selectedEyeTags.filter(
          (tag) => eyeTag != tag
        ),
      };
    });
  };

  // tattooTag delete
  const handleTattooTagDelete = (e, tattooTag) => {
    e.preventDefault();
    setSideBarFormState((prevState) => {
      return {
        ...prevState,
        selectedTattooTags: prevState.selectedTattooTags.filter(
          (tag) => tattooTag != tag
        ),
      };
    });
  };

  // scarsTag delete
  const handleScarsTagDelete = (e, scarsTag) => {
    e.preventDefault();
    setSideBarFormState((prevState) => {
      return {
        ...prevState,
        selectedScarsTags: prevState.selectedScarsTags.filter(
          (tag) => scarsTag != tag
        ),
      };
    });
  };

  // sexTag delete
  const handleSexTagDelete = (e, sexTag) => {
    e.preventDefault();
    setSideBarFormState((prevState) => {
      return {
        ...prevState,
        selectedSexTags: prevState.selectedSexTags.filter(
          (tag) => sexTag != tag
        ),
      };
    });
  };

  // invoiceTag delete
  const handleInvoiceTagDelete = (e, invoiceTag) => {
    e.preventDefault();
    setSideBarFormState((prevState) => {
      return {
        ...prevState,
        selectedInvoiceTags: prevState.selectedInvoiceTags.filter(
          (tag) => invoiceTag != tag
        ),
      };
    });
  };

  // driveTag delete
  const handleDriveTagDelete = (e, driveTag) => {
    e.preventDefault();
    setSideBarFormState((prevState) => {
      return {
        ...prevState,
        selectedDriveTags: prevState.selectedDriveTags.filter(
          (tag) => driveTag != tag
        ),
      };
    });
  };

  return (
    <div className="flex flex-col space-y-10 sm:flex-row sm:space-x-6 sm:space-y-0 md:flex-col md:space-x-0 md:space-y-10 xl:flex-row xl:space-x-6 xl:space-y-0 mt-9 w-[100%]">
      <HeroesPageSideBarForm
        heroSkills={heroSkills}
        heroHair={heroHair}
        heroEye={heroEye}
        heroTattoo={heroTattoo}
        heroScars={heroScars}
        heroSex={heroSex}
        heroInvoice={heroInvoice}
        heroDrive={heroDrive}
        sideBarFormState={sideBarFormState}
        setSideBarFormState={setSideBarFormState}
        setdisplayedHeroes={setDisplayedHeroes}
      />
      <div className="md:max-w-screen xl:w-[70%]  align-center ">
        <SearchHeroForm
          searchFormState={searchFormState}
          setSearchFormState={setSearchFormState}
          setdisplayedHeroes={setDisplayedHeroes}
        />
        {/* Heroes header */}
        <div className="flex justify-between items-center mb-4  ">
          {/* Number of heroes found message  */}
          <div className="text-sm text-slate-500 italic">
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

          {/* hair tags */}
          <div>
            <div className="flex flex-wrap items-center -m-1 max-w-2xl">
              {sideBarFormState.selectedHairTags &&
                sideBarFormState.selectedHairTags.map((hair) => (
                  <div className="m-1" key={hair}>
                    <a
                      className="text-xs hover:scale-110  hover:bg-red-100 hover:text-red-600 inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1"
                      href="#"
                    >
                      {hair}
                      <svg
                        className="h-2 w-2 ml-2 mt-1 text-sm hover:cursor-pointer"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 8 8"
                        onClick={(e) => handleHairTagDelete(e, hair)}
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

          {/* eye tags */}
          <div>
            <div className="flex flex-wrap items-center -m-1 max-w-2xl">
              {sideBarFormState.selectedEyeTags &&
                sideBarFormState.selectedEyeTags.map((eye) => (
                  <div className="m-1" key={eye}>
                    <a
                      className="text-xs hover:scale-110  hover:bg-red-100 hover:text-red-600 inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1"
                      href="#"
                    >
                      (eyes){eye}
                      <svg
                        className="h-2 w-2 ml-2 mt-1 text-sm hover:cursor-pointer"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 8 8"
                        onClick={(e) => handleEyeTagDelete(e, eye)}
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

          {/* tattoo tags */}
          <div>
            <div className="flex flex-wrap items-center -m-1 max-w-2xl">
              {sideBarFormState.selectedTattooTags &&
                sideBarFormState.selectedTattooTags.map((tattoo) => (
                  <div className="m-1" key={tattoo}>
                    <a
                      className="text-xs hover:scale-110  hover:bg-red-100 hover:text-red-600 inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1"
                      href="#"
                    >
                      (tattoo){tattoo}
                      <svg
                        className="h-2 w-2 ml-2 mt-1 text-sm hover:cursor-pointer"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 8 8"
                        onClick={(e) => handleTattooTagDelete(e, tattoo)}
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

          {/* scars tags */}
          <div>
            <div className="flex flex-wrap items-center -m-1 max-w-2xl">
              {sideBarFormState.selectedScarsTags &&
                sideBarFormState.selectedScarsTags.map((scars) => (
                  <div className="m-1" key={scars}>
                    <a
                      className="text-xs hover:scale-110  hover:bg-red-100 hover:text-red-600 inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1"
                      href="#"
                    >
                      (scars){scars}
                      <svg
                        className="h-2 w-2 ml-2 mt-1 text-sm hover:cursor-pointer"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 8 8"
                        onClick={(e) => handleScarsTagDelete(e, scars)}
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

          {/* sex tags */}
          <div>
            <div className="flex flex-wrap items-center -m-1 max-w-2xl">
              {sideBarFormState.selectedSexTags &&
                sideBarFormState.selectedSexTags.map((sex) => (
                  <div className="m-1" key={sex}>
                    <a
                      className="text-xs hover:scale-110  hover:bg-red-100 hover:text-red-600 inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1"
                      href="#"
                    >
                      (sex){sex}
                      <svg
                        className="h-2 w-2 ml-2 mt-1 text-sm hover:cursor-pointer"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 8 8"
                        onClick={(e) => handleSexTagDelete(e, sex)}
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

          {/* invoice tags */}
          <div>
            <div className="flex flex-wrap items-center -m-1 max-w-2xl">
              {sideBarFormState.selectedInvoiceTags &&
                sideBarFormState.selectedInvoiceTags.map((invoice) => (
                  <div className="m-1" key={invoice}>
                    <a
                      className="text-xs hover:scale-110  hover:bg-red-100 hover:text-red-600 inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1"
                      href="#"
                    >
                      (invoice){invoice}
                      <svg
                        className="h-2 w-2 ml-2 mt-1 text-sm hover:cursor-pointer"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 8 8"
                        onClick={(e) => handleInvoiceTagDelete(e, invoice)}
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

          {/* drive tags */}
          <div>
            <div className="flex flex-wrap items-center -m-1 max-w-2xl">
              {sideBarFormState.selectedDriveTags &&
                sideBarFormState.selectedDriveTags.map((drive) => (
                  <div className="m-1" key={drive}>
                    <a
                      className="text-xs hover:scale-110  hover:bg-red-100 hover:text-red-600 inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1"
                      href="#"
                    >
                      (drive){drive}
                      <svg
                        className="h-2 w-2 ml-2 mt-1 text-sm hover:cursor-pointer"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 8 8"
                        onClick={(e) => handleDriveTagDelete(e, drive)}
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
  );
}
