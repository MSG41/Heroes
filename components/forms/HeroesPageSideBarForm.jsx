import React from "react";
import TagsFilterForm from "./TagsFilterForm";
import { FilterIcon } from "@heroicons/react/solid";
import MultiRangeShoeSizeSlider from "../Sliders/SliderShoe/MultiRangeShoeSizeSlider";
import SliderHeight from "../Sliders/SliderHeight/SliderHeight";
import SliderAge from "../Sliders/SliderAge/SliderAge";

function HeroesPageSideBarForm({
  heroSkills,
  sideBarFormState,
  setSideBarFormState,
}) {
  function useToggle(initialValue = false) {
    const [value, setValue] = React.useState(initialValue);
    const toggle = React.useCallback(() => {
      setValue((v) => !v);
    }, []);
    return [value, toggle];
  }

  const tattoosOptions = [
    { value: "no", display: "No" },
    { value: "yes", display: "Yes" },
  ];

  const heroGendersOptions = [
    { value: "female", display: "Female" },
    { value: "male", display: "Male" },
    { value: "Non-Binary", display: "Non-Binary" },
  ];
  const heroLooksOptions = [
    { value: "Caucasian", display: "Caucasian" },
    { value: "Asian", display: "Asian" },
    { value: "Latin/Hispanic", display: "Latin/Hispanic" },
    { value: "POC", display: "POC" },
    { value: "MENA", display: "MENA" },
    { value: "Mixed", display: "Mixed" },
  ];
  const heroScarsOptions = [
    { value: "no", display: "No" },
    { value: "yes", display: "Yes" },
  ];
  const hairColorsOptions = [
    { value: "Black", display: "Black" },
    { value: "Brown", display: "Brown" },
    { value: "Blonde", display: "Blonde" },
    { value: "Red", display: "Red" },
    { value: "Colored", display: "Colored" },
  ];
  const eyeColorsOptions = [
    { value: "Blue", display: "Blue" },
    { value: "Brown", display: "Brown" },
    { value: "Green", display: "Green" },
    { value: "Grey", display: "Grey" },
  ];
  const sizesOptions = [
    { value: "X-small", display: "X-small" },
    { value: "Small", display: "Small" },
    { value: "Medium", display: "Medium" },
    { value: "Large", display: "Large" },
    { value: "X-large", display: "X-large" },
  ];
  const heroInvoicesOptions = [
    { value: "no", display: "No" },
    { value: "yes", display: "Yes" },
  ];
  const driversOptions = [
    { value: "no", display: "No" },
    { value: "yes", display: "Yes" },
  ];
  const AgenciesOptions = [
    { value: "no", display: "No" },
    { value: "yes", display: "Yes" },
  ];

  const HeroContinentsOptions = [
    { value: "Africa", display: "Africa" },
    { value: "Asia", display: "Asia" },
    { value: "Australia", display: "Australia" },
    { value: "Europe", display: "Europe" },
    { value: "Middle-East", display: "Middle-East" },
    { value: "North-America", display: "North-America" },
    { value: "South-America", display: "South-America" },
  ];

  const HeroCountriesOptions = [
    { value: "Belgium", display: "Belgium" },
    { value: "France", display: "France" },
    { value: "the Netherlands", display: "The Netherlands" },
  ];

  // ------------------------

  // Please Re-write the following in a smarter way!!!!

  const handleContinentSelect = (e, option) => {
    console.log(e.target.checked, option);
    if (e.target.checked) {
      setSideBarFormState((prevState) => {
        const continents = [...prevState.continents];
        continents.push(option);
        return { ...prevState, continents };
      });
    } else {
      setSideBarFormState((prevState) => {
        return {
          ...prevState,
          continents: prevState.continents.filter(
            (continent) => option != continent
          ),
        };
      });
    }
  };

  // ------------------------

  const handleCountrySelect = (e, option) => {
    console.log(e.target.checked, option);
    if (e.target.checked) {
      setSideBarFormState((prevState) => {
        const countries = [...prevState.countries];
        countries.push(option);
        return { ...prevState, countries };
      });
    } else {
      setSideBarFormState((prevState) => {
        return {
          ...prevState,
          countries: prevState.countries.filter((country) => option != country),
        };
      });
    }
  };

  // ------------------------

  const handleHeroGenderSelect = (e, option) => {
    console.log(e.target.checked, option);
    if (e.target.checked) {
      setSideBarFormState((prevState) => {
        const heroGenders = [...prevState.heroGenders];
        heroGenders.push(option);
        return { ...prevState, heroGenders };
      });
    } else {
      setSideBarFormState((prevState) => {
        return {
          ...prevState,
          heroGenders: prevState.heroGenders.filter(
            (gender) => option != gender
          ),
        };
      });
    }
  };

  // ------------------------

  const handleTattooSelect = (e, option) => {
    console.log(e.target.checked, option);
    if (e.target.checked) {
      setSideBarFormState((prevState) => {
        const tattoos = [...prevState.tattoos];
        tattoos.push(option);
        return { ...prevState, tattoos };
      });
    } else {
      setSideBarFormState((prevState) => {
        return {
          ...prevState,
          tattoos: prevState.tattoos.filter(
            (heroTattoo) => option != heroTattoo
          ),
        };
      });
    }
  };
  // ------------------------
  const handleHeroLookSelect = (e, option) => {
    console.log(e.target.checked, option);
    if (e.target.checked) {
      setSideBarFormState((prevState) => {
        const heroLooks = [...prevState.heroLooks];
        heroLooks.push(option);
        return { ...prevState, heroLooks };
      });
    } else {
      setSideBarFormState((prevState) => {
        return {
          ...prevState,
          heroLooks: prevState.heroLooks.filter((looks) => option != looks),
        };
      });
    }
  };
  // ------------------------
  const handleHeroScarSelect = (e, option) => {
    console.log(e.target.checked, option);
    if (e.target.checked) {
      setSideBarFormState((prevState) => {
        const heroScars = [...prevState.heroScars];
        heroScars.push(option);
        return { ...prevState, heroScars };
      });
    } else {
      setSideBarFormState((prevState) => {
        return {
          ...prevState,
          heroScars: prevState.heroScars.filter((scar) => option != scar),
        };
      });
    }
  };
  // ------------------------
  const handleHairColorSelect = (e, option) => {
    console.log(e.target.checked, option);
    if (e.target.checked) {
      setSideBarFormState((prevState) => {
        const hairColors = [...prevState.hairColors];
        hairColors.push(option);
        return { ...prevState, hairColors };
      });
    } else {
      setSideBarFormState((prevState) => {
        return {
          ...prevState,
          hairColors: prevState.hairColors.filter(
            (hairColor) => option != hairColor
          ),
        };
      });
    }
  };
  // ------------------------
  const handleEyeColorSelect = (e, option) => {
    console.log(e.target.checked, option);
    if (e.target.checked) {
      setSideBarFormState((prevState) => {
        const eyeColors = [...prevState.eyeColors];
        eyeColors.push(option);
        return { ...prevState, eyeColors };
      });
    } else {
      setSideBarFormState((prevState) => {
        return {
          ...prevState,
          eyeColors: prevState.eyeColors.filter(
            (eyeColor) => option != eyeColor
          ),
        };
      });
    }
  };
  // ------------------------
  const handleSizeSelect = (e, option) => {
    console.log(e.target.checked, option);
    if (e.target.checked) {
      setSideBarFormState((prevState) => {
        const sizes = [...prevState.sizes];
        sizes.push(option);
        return { ...prevState, sizes };
      });
    } else {
      setSideBarFormState((prevState) => {
        return {
          ...prevState,
          sizes: prevState.sizes.filter(
            (standardSize) => option != standardSize
          ),
        };
      });
    }
  };
  // ------------------------
  const handleheroInvoiceSelect = (e, option) => {
    console.log(e.target.checked, option);
    if (e.target.checked) {
      setSideBarFormState((prevState) => {
        const heroInvoices = [...prevState.heroInvoices];
        heroInvoices.push(option);
        return { ...prevState, heroInvoices };
      });
    } else {
      setSideBarFormState((prevState) => {
        return {
          ...prevState,
          heroInvoices: prevState.heroInvoices.filter(
            (heroInvoice) => option != heroInvoice
          ),
        };
      });
    }
  };
  // ------------------------
  const handleDriverSelect = (e, option) => {
    console.log(e.target.checked, option);
    if (e.target.checked) {
      setSideBarFormState((prevState) => {
        const drivers = [...prevState.drivers];
        drivers.push(option);
        return { ...prevState, drivers };
      });
    } else {
      setSideBarFormState((prevState) => {
        return {
          ...prevState,
          drivers: prevState.drivers.filter((driver) => option != driver),
        };
      });
    }
  };
  // ------------------------
  const handleAgencySelect = (e, option) => {
    console.log(e.target.checked, option);
    if (e.target.checked) {
      setSideBarFormState((prevState) => {
        const agencies = [...prevState.agencies];
        agencies.push(option);
        return { ...prevState, agencies };
      });
    } else {
      setSideBarFormState((prevState) => {
        return {
          ...prevState,
          agencies: prevState.agencies.filter(
            (otherAgency) => option != otherAgency
          ),
        };
      });
    }
  };

  const [genderisOn, togglegenderIsOn] = useToggle();
  const [tattooisOn, toggletattooIsOn] = useToggle();
  const [lookisOn, togglelookIsOn] = useToggle();
  const [scarisOn, togglescarIsOn] = useToggle();
  const [hairisOn, togglehairIsOn] = useToggle();
  const [eyeisOn, toggleeyeIsOn] = useToggle();
  const [sizeisOn, togglesizeIsOn] = useToggle();
  const [invoiceisOn, toggleinvoiceIsOn] = useToggle();
  const [driverisOn, toggledriverIsOn] = useToggle();
  const [otherisOn, toggleotherIsOn] = useToggle();
  const [continentisOn, togglecontinentIsOn] = useToggle();
  const [countryisOn, togglecountryIsOn] = useToggle();

  return (
    <div className="xl:sticky xl:top-10 xl:h-[94vh] xl:overflow-y-auto sm:sticky-none sm:top-none sm:bottom-none sm:h-none sm:overflow-none">
      <div className="flex-row space-y-8">
        {/* White box */}
        <div className="bg-white shadow-lg rounded-sm border border-slate-200 p-5 ">
          <div className="grid md:grid-cols-2 xl:grid-cols-1 gap-7 ">
            {/* Group 0*/}
            <TagsFilterForm
              heroSkills={heroSkills}
              selectedTags={sideBarFormState.selectedTags}
              setSideBarFormState={setSideBarFormState}
            />

            <div className="flex flex-row">
              <MultiRangeShoeSizeSlider
                min={34}
                max={50}
                setSideBarFormState={setSideBarFormState}
              />
            </div>

            <div className="flex flex-row">
              <SliderHeight
                min={140}
                max={220}
                setSideBarFormState={setSideBarFormState}
              />
            </div>

            <div className="flex flex-row">
              <SliderAge
                min={8}
                max={99}
                setSideBarFormState={setSideBarFormState}
              />
            </div>
            {/* group Continents  */}
            <div>
              <div className="flex flex-row">
                {" "}
                <FilterIcon
                  className="ml-1 mr-2 h-6 w-6 text-gray-400"
                  aria-hidden="true"
                  onClick={togglecontinentIsOn}
                />
                <div
                  id="continenttext"
                  className="text-sm text-slate-800 font-semibold mb-3"
                  onClick={togglecontinentIsOn}
                >
                  Continent &nbsp;
                </div>
                <div className="scale-125">🗺</div>
              </div>
              <ul className="space-y-2">
                {HeroContinentsOptions.map((option) => {
                  if (continentisOn)
                    return (
                      <li key={option.value}>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox"
                            onChange={(e) =>
                              handleContinentSelect(e, option.value)
                            }
                            checked={sideBarFormState.continents.includes(
                              option.value
                            )}
                          />
                          <span className="text-sm text-slate-600 font-medium ml-2">
                            {option.display}
                          </span>
                        </label>
                      </li>
                    );
                })}
              </ul>
            </div>
            {/* group Countries  */}
            <div>
              <div className="flex flex-row">
                {" "}
                <FilterIcon
                  className="ml-1 mr-2 h-6 w-6 text-gray-400"
                  aria-hidden="true"
                  onClick={togglecountryIsOn}
                />
                <div
                  id="countrytext"
                  className="text-sm text-slate-800 font-semibold mb-3"
                  onClick={togglecountryIsOn}
                >
                  Country &nbsp;
                </div>
                <div className="scale-125">📍</div>
              </div>
              <ul className="space-y-2">
                {HeroCountriesOptions.map((option) => {
                  if (countryisOn)
                    return (
                      <li key={option.value}>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox"
                            onChange={(e) =>
                              handleCountrySelect(e, option.value)
                            }
                            checked={sideBarFormState.countries.includes(
                              option.value
                            )}
                          />
                          <span className="text-sm text-slate-600 font-medium ml-2">
                            {option.display}
                          </span>
                        </label>
                      </li>
                    );
                })}
              </ul>
            </div>
            {/* group hero gender  */}
            <div>
              <div className="flex flex-row">
                {" "}
                <FilterIcon
                  className="ml-1 mr-2 h-6 w-6 text-gray-400"
                  aria-hidden="true"
                  onClick={togglegenderIsOn}
                />
                <div
                  id="gendertext"
                  className="text-sm text-slate-800 font-semibold mb-3"
                  onClick={togglegenderIsOn}
                >
                  Gender
                </div>
              </div>
              <ul className="space-y-2">
                {heroGendersOptions.map((option) => {
                  if (genderisOn)
                    return (
                      <li key={option.value}>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox"
                            onChange={(e) =>
                              handleHeroGenderSelect(e, option.value)
                            }
                            checked={sideBarFormState.heroGenders.includes(
                              option.value
                            )}
                          />
                          <span className="text-sm text-slate-600 font-medium ml-2">
                            {option.display}
                          </span>
                        </label>
                      </li>
                    );
                })}
              </ul>
            </div>
            {/* Group filter tattoo  */}
            <div>
              <div className="flex flex-row">
                <FilterIcon
                  className="ml-1 mr-2 h-6 w-6 text-gray-400"
                  aria-hidden="true"
                  onClick={toggletattooIsOn}
                />
                <div
                  className="text-sm text-slate-800 font-semibold mb-3"
                  onClick={toggletattooIsOn}
                  id="tattootext"
                >
                  Tattoo
                </div>
              </div>
              <ul className="space-y-2">
                {tattoosOptions.map((option) => {
                  if (tattooisOn)
                    return (
                      <li key={option.value}>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox"
                            onChange={(e) =>
                              handleTattooSelect(e, option.value)
                            }
                            checked={sideBarFormState.tattoos.includes(
                              option.value
                            )}
                          />
                          <span className="text-sm text-slate-600 font-medium ml-2">
                            {option.display}
                          </span>
                        </label>
                      </li>
                    );
                })}
              </ul>
            </div>
            {/* ------------------------------- */}
            <div>
              <div className="flex flex-row">
                {" "}
                <FilterIcon
                  className="ml-1 mr-2 h-6 w-6 text-gray-400"
                  aria-hidden="true"
                  onClick={togglelookIsOn}
                />
                <div
                  className="text-sm text-slate-800 font-semibold mb-3"
                  onClick={togglelookIsOn}
                  id="looktext"
                >
                  Looks
                </div>
              </div>
              <ul className="space-y-2">
                {heroLooksOptions.map((option) => {
                  if (lookisOn)
                    return (
                      <li key={option.value}>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox"
                            onChange={(e) =>
                              handleHeroLookSelect(e, option.value)
                            }
                            checked={sideBarFormState.heroLooks.includes(
                              option.value
                            )}
                          />
                          <span className="text-sm text-slate-600 font-medium ml-2">
                            {option.display}
                          </span>
                        </label>
                      </li>
                    );
                })}
              </ul>
            </div>
            {/* ------------------------------- */}
            <div>
              <div className="flex flex-row">
                {" "}
                <FilterIcon
                  className="ml-1 mr-2 h-6 w-6 text-gray-400"
                  aria-hidden="true"
                  onClick={togglescarIsOn}
                />
                <div
                  className="text-sm text-slate-800 font-semibold mb-3"
                  onClick={togglescarIsOn}
                  id="scartext"
                >
                  Scar(s)
                </div>
              </div>
              <ul className="space-y-2">
                {heroScarsOptions.map((option) => {
                  if (scarisOn)
                    return (
                      <li key={option.value}>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox"
                            onChange={(e) =>
                              handleHeroScarSelect(e, option.value)
                            }
                            checked={sideBarFormState.heroScars.includes(
                              option.value
                            )}
                          />
                          <span className="text-sm text-slate-600 font-medium ml-2">
                            {option.display}
                          </span>
                        </label>
                      </li>
                    );
                })}
              </ul>
            </div>
            {/* ------------------------------- */}
            <div>
              <div className="flex flex-row">
                {" "}
                <FilterIcon
                  className="ml-1 mr-2 h-6 w-6 text-gray-400"
                  aria-hidden="true"
                  onClick={togglehairIsOn}
                />
                <div
                  className="text-sm text-slate-800 font-semibold mb-3"
                  onClick={togglehairIsOn}
                  id="hairtext"
                >
                  Hair Color
                </div>
              </div>
              <ul className="space-y-2">
                {hairColorsOptions.map((option) => {
                  if (hairisOn)
                    return (
                      <li key={option.value}>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox"
                            onChange={(e) =>
                              handleHairColorSelect(e, option.value)
                            }
                            checked={sideBarFormState.hairColors.includes(
                              option.value
                            )}
                          />
                          <span className="text-sm text-slate-600 font-medium ml-2">
                            {option.display}
                          </span>
                        </label>
                      </li>
                    );
                })}
              </ul>
            </div>
            {/* ------------------------------- */}
            <div>
              <div className="flex flex-row">
                {" "}
                <FilterIcon
                  className="ml-1 mr-2 h-6 w-6 text-gray-400"
                  aria-hidden="true"
                  onClick={toggleeyeIsOn}
                />
                <div
                  className="text-sm text-slate-800 font-semibold mb-3"
                  onClick={toggleeyeIsOn}
                  id="eyetext"
                >
                  Eye Color
                </div>
              </div>
              <ul className="space-y-2">
                {eyeColorsOptions.map((option) => {
                  if (eyeisOn)
                    return (
                      <li key={option.value}>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox"
                            onChange={(e) =>
                              handleEyeColorSelect(e, option.value)
                            }
                            checked={sideBarFormState.eyeColors.includes(
                              option.value
                            )}
                          />
                          <span className="text-sm text-slate-600 font-medium ml-2">
                            {option.display}
                          </span>
                        </label>
                      </li>
                    );
                })}
              </ul>
            </div>
            {/* ------------------------------- */}
            <div>
              <div className="flex flex-row">
                {" "}
                <FilterIcon
                  className="ml-1 mr-2 h-6 w-6 text-gray-400"
                  aria-hidden="true"
                  onClick={togglesizeIsOn}
                />
                <div
                  className="text-sm text-slate-800 font-semibold mb-3"
                  onClick={togglesizeIsOn}
                  id="sizetext"
                >
                  Standard Size
                </div>
              </div>
              <ul className="space-y-2">
                {sizesOptions.map((option) => {
                  if (sizeisOn)
                    return (
                      <li key={option.value}>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox"
                            onChange={(e) => handleSizeSelect(e, option.value)}
                            checked={sideBarFormState.sizes.includes(
                              option.value
                            )}
                          />
                          <span className="text-sm text-slate-600 font-medium ml-2">
                            {option.display}
                          </span>
                        </label>
                      </li>
                    );
                })}
              </ul>
            </div>
            {/* ------------------------------- */}
            <div>
              <div className="flex flex-row">
                {" "}
                <FilterIcon
                  className="ml-1 mr-2 h-6 w-6 text-gray-400"
                  aria-hidden="true"
                  onClick={toggleinvoiceIsOn}
                />
                <div
                  className="text-sm text-slate-800 font-semibold mb-3"
                  onClick={toggleinvoiceIsOn}
                  id="invoicetext"
                >
                  Invoice
                </div>
              </div>
              <ul className="space-y-2">
                {heroInvoicesOptions.map((option) => {
                  if (invoiceisOn)
                    return (
                      <li key={option.value}>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox"
                            onChange={(e) =>
                              handleheroInvoiceSelect(e, option.value)
                            }
                            checked={sideBarFormState.heroInvoices.includes(
                              option.value
                            )}
                          />
                          <span className="text-sm text-slate-600 font-medium ml-2">
                            {option.display}
                          </span>
                        </label>
                      </li>
                    );
                })}
              </ul>
            </div>
            {/* ------------------------------- */}
            <div>
              <div className="flex flex-row">
                {" "}
                <FilterIcon
                  className="ml-1 mr-2 h-6 w-6 text-gray-400"
                  aria-hidden="true"
                  onClick={toggledriverIsOn}
                />
                <div
                  className="text-sm text-slate-800 font-semibold mb-3"
                  onClick={toggledriverIsOn}
                  id="drivertext"
                >
                  Drivers's Licence
                </div>
              </div>
              <ul className="space-y-2">
                {driversOptions.map((option) => {
                  if (driverisOn)
                    return (
                      <li key={option.value}>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox"
                            onChange={(e) =>
                              handleDriverSelect(e, option.value)
                            }
                            checked={sideBarFormState.drivers.includes(
                              option.value
                            )}
                          />
                          <span className="text-sm text-slate-600 font-medium ml-2">
                            {option.display}
                          </span>
                        </label>
                      </li>
                    );
                })}
              </ul>
            </div>
            {/* ------------------------------- */}
            <div>
              <div className="flex flex-row">
                {" "}
                <FilterIcon
                  className="ml-1 mr-2 h-6 w-6 text-gray-400"
                  aria-hidden="true"
                  onClick={toggleotherIsOn}
                />
                <div
                  className="text-sm text-slate-800 font-semibold mb-3"
                  onClick={toggleotherIsOn}
                  id="othertext"
                >
                  Other Agency ?
                </div>
              </div>
              <ul className="space-y-2">
                {AgenciesOptions.map((option) => {
                  if (otherisOn)
                    return (
                      <li key={option.value}>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox"
                            onChange={(e) =>
                              handleAgencySelect(e, option.value)
                            }
                            checked={sideBarFormState.agencies.includes(
                              option.value
                            )}
                          />
                          <span className="text-sm text-slate-600 font-medium ml-2">
                            {option.display}
                          </span>
                        </label>
                      </li>
                    );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroesPageSideBarForm;
