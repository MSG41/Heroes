import React, { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import TagsFilterForm from "./TagsFilterForm";
import { ChevronDownIcon, FilterIcon } from "@heroicons/react/solid";
import MultiRangeShoeSizeSlider from "../Sliders/SliderShoe/MultiRangeShoeSizeSlider";
import SliderHeight from "../Sliders/SliderHeight/SliderHeight";
import SliderAge from "../Sliders/SliderAge/SliderAge";

function HeroesPageSideBarForm({
  heroSkills,
  sideBarFormState,
  setSideBarFormState,
  setDisplayedHeroes,
}) {
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

  return (
    <div className="xl:sticky xl:top-10 xl:h-[96vh] xl:overflow-y-auto sm:sticky-none sm:top-none sm:bottom-none sm:h-none sm:overflow-none">
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

            {/* group hero gender  */}
            <div>
              <div className="flex flex-row">
                {" "}
                <FilterIcon
                  className="ml-1 mr-2 h-6 w-6 text-gray-400"
                  aria-hidden="true"
                />
                <div className="text-sm text-slate-800 font-semibold mb-3">
                  Gender
                </div>
              </div>
              <ul className="space-y-2">
                {heroGendersOptions.map((option) => {
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
                />
                <div className="text-sm text-slate-800 font-semibold mb-3">
                  Tattoo
                </div>
              </div>
              <ul className="space-y-2">
                {tattoosOptions.map((option) => {
                  return (
                    <li key={option.value}>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox"
                          onChange={(e) => handleTattooSelect(e, option.value)}
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
                />
                <div className="text-sm text-slate-800 font-semibold mb-3">
                  Looks
                </div>
              </div>
              <ul className="space-y-2">
                {heroLooksOptions.map((option) => {
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
                />
                <div className="text-sm text-slate-800 font-semibold mb-3">
                  Scar(s)
                </div>
              </div>
              <ul className="space-y-2">
                {heroScarsOptions.map((option) => {
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
                />
                <div className="text-sm text-slate-800 font-semibold mb-3">
                  Hair Color
                </div>
              </div>
              <ul className="space-y-2">
                {hairColorsOptions.map((option) => {
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
                />
                <div className="text-sm text-slate-800 font-semibold mb-3">
                  Eye Color
                </div>
              </div>
              <ul className="space-y-2">
                {eyeColorsOptions.map((option) => {
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
                />
                <div className="text-sm text-slate-800 font-semibold mb-3">
                  Standard Size
                </div>
              </div>
              <ul className="space-y-2">
                {sizesOptions.map((option) => {
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
                />
                <div className="text-sm text-slate-800 font-semibold mb-3">
                  Invoice
                </div>
              </div>
              <ul className="space-y-2">
                {heroInvoicesOptions.map((option) => {
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
                />
                <div className="text-sm text-slate-800 font-semibold mb-3">
                  Drivers's Licence
                </div>
              </div>
              <ul className="space-y-2">
                {driversOptions.map((option) => {
                  return (
                    <li key={option.value}>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox"
                          onChange={(e) => handleDriverSelect(e, option.value)}
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
                />
                <div className="text-sm text-slate-800 font-semibold mb-3">
                  Other Agency ?
                </div>
              </div>
              <ul className="space-y-2">
                {AgenciesOptions.map((option) => {
                  return (
                    <li key={option.value}>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox"
                          onChange={(e) => handleAgencySelect(e, option.value)}
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

        {/* Alert */}
        {/* <div className='relative bg-indigo-200 rounded-sm p-5 min-w-60'>
        <div className='absolute bottom-0 -mb-3'>
          <svg
            width='44'
            height='42'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
          >
            <defs>
              <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ill-b'>
                <stop stopColor='#A5B4FC' offset='0%' />
                <stop stopColor='#818CF8' offset='100%' />
              </linearGradient>
              <linearGradient
                x1='50%'
                y1='24.537%'
                x2='50%'
                y2='100%'
                id='ill-c'
              >
                <stop stopColor='#4338CA' offset='0%' />
                <stop stopColor='#6366F1' stopOpacity='0' offset='100%' />
              </linearGradient>
              <path id='ill-a' d='m20 0 20 40-20-6.25L0 40z' />
            </defs>
            <g
              transform='scale(-1 1) rotate(-51 -11.267 67.017)'
              fill='none'
              fillRule='evenodd'
            >
              <mask id='ill-d' fill='#fff'>
                <use xlinkHref='#ill-a' />
              </mask>
              <use fill='url(#ill-b)' xlinkHref='#ill-a' />
              <path
                fill='url(#ill-c)'
                mask='url(#ill-d)'
                d='M20.586-7.913h25v47.5h-25z'
              />
            </g>
          </svg>
        </div>
        <div className='relative'>
          <div className='text-sm font-medium text-slate-800 mb-2'>
            Remember to keep track of your job research.
          </div>
          <div className='text-right'>
            <a
              className='text-sm font-medium text-indigo-500 hover:text-indigo-600'
              href='#0'
            >
              Create Alert -&gt;
            </a>
          </div>
        </div>
      </div> */}

        {/* End Alert */}
      </div>
    </div>
  );
}

export default HeroesPageSideBarForm;
