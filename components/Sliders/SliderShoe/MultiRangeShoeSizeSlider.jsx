import React, { useCallback, useEffect, useState, useRef } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { FilterIcon } from "@heroicons/react/solid";
import { Switch } from "@headlessui/react";
import SearchHeroForm from "../../forms/SearchHeroForm";
import { getHeroes, searchHeroes } from "../../../datalayer";

const MultiRangeShoeSizeSlider = ({
  min,
  max,
  setSideBarFormState,
  sideBarFormState,
}) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value); // Preceding with '+' converts the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes

  // useEffect(() => {
  //   setSideBarFormState((prevState) => {
  //     return {
  //       ...prevState,
  //       minShoeSizeON: minVal,
  //       maxShoeSizeON: maxVal,
  //     };
  //   });
  // }, [minVal, maxVal]);

  const [shoeOn, setShoeOn] = useState("");

  const handleSelectedTag = (e, option) => {
    console.log(e.target.checked, option);
    if (e.target.checked) {
      setSideBarFormState((prevState) => {
        const selectedTags = [...prevState.selectedTags];
        selectedTags.push(option);
        return { ...prevState, selectedTags };
      });
    } else {
      setSideBarFormState((prevState) => {
        return {
          ...prevState,
          selectedTags: prevState.selectedTags.filter((tag) => option != tag),
        };
      });
    }
  };

  // checked={selectedTags.includes(option.value)}
  //                 onChange={(e) => handleSelectedTag(e, option.value)}

  const handleShoeChange = (checked) => {
    console.log(checked);

    if (checked) {
      setSideBarFormState((prevState) => {
        return {
          ...prevState,
          // heroInvoices: [],
          // heroGenders: [],
          // tattoos: [],
          // heroLooks: [],
          // heroScars: [],
          // hairColors: [],
          // eyeColors: [],
          // sizes: [],
          // drivers: [],
          // agencies: [],
          // selectedTags: [],
          minShoeSize: minVal,
          maxShoeSize: maxVal,
        };
      });
    } else {
      setSideBarFormState((prevState) => {
        return {
          ...prevState,
          minShoeSize: prevState.minVal,
          maxShoeSize: prevState.maxVal,
          // heroInvoices: [],
          // heroGenders: [],
          // tattoos: [],
          // heroLooks: [],
          // heroScars: [],
          // hairColors: [],
          // eyeColors: [],
          // sizes: [],
          // drivers: [],
          // agencies: [],
          // selectedTags: [],
        };
      });
    }
    //TODO: send request and filter jobs
    // shoeOn ? setShoeOn(false) : setShoeOn(true);
    setShoeOn(!shoeOn);

    // setSideBarFormState((prevState) => {
    //   return {
    //     ...prevState,
    //     minShoeSize: minVal,
    //     maxShoeSize: maxVal,
    //   };
    // });
  };

  useEffect(() => {
    if (shoeOn) {
      setSideBarFormState((prevState) => {
        return {
          ...prevState,
          minShoeSize: minVal,
          maxShoeSize: maxVal,
        };
      });
    } else {
      setSideBarFormState((prevState) => {
        return {
          prevState,
          heroInvoices: [],
          heroGenders: [],
          tattoos: [],
          heroLooks: [],
          heroScars: [],
          hairColors: [],
          eyeColors: [],
          sizes: [],
          drivers: [],
          agencies: [],
          selectedTags: [],
        };
      });
    }
  }, [minVal, maxVal]);

  return (
    <div>
      <Switch.Group
        as="div"
        className="flex items-center mb-5 bg-gradient-to-r from-violet-500/5 to-yellow-500/50 rounded-full"
      >
        <Switch
          onChange={handleShoeChange}
          className={classNames(
            shoeOn ? "bg-emerald-600" : "bg-gray-200",
            "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:-ring-2 focus:ring-offset-2 focus:-ring-indigo-500"
          )}
        >
          <span
            aria-hidden="true"
            className={classNames(
              shoeOn ? "translate-x-5" : "translate-x-0",
              "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
            )}
          />
        </Switch>
        <Switch.Label as="span" className="ml-3">
          <span className="text-sm font-medium text-green-900 pr-2 ">
            Activate Shoe Size Slider
          </span>
        </Switch.Label>
      </Switch.Group>

      <div className={classNames(shoeOn ? "flex flex-col" : "  hidden ")}>
        <div className="flex flex-row">
          {" "}
          <FilterIcon
            className="ml-1 mr-2 h-6 w-6 text-gray-400"
            aria-hidden="true"
          />
          <div className="text-sm text-slate-800 font-semibold mb-3">
            Shoe Size (EU)
          </div>
        </div>
        <div className="container">
          <input
            type="range"
            min={min}
            max={max}
            value={minVal}
            ref={minValRef}
            onChange={(event) => {
              const value = Math.min(+event.target.value, maxVal - 0.5);
              setMinVal(value);
              event.target.value = value.toString();
            }}
            className={classnames("thumb thumb--zindex-3", {
              "thumb--zindex-5": minVal > max - 100,
            })}
          />

          <input
            type="range"
            min={min}
            max={max}
            value={maxVal}
            ref={maxValRef}
            onChange={(event) => {
              const value = Math.max(+event.target.value, minVal + 0.5);
              setMaxVal(value);
              event.target.value = value.toString();
            }}
            className="thumb thumb--zindex-4"
          />
          <div className="slider">
            <div className="slider__track" />
            <div
              ref={range}
              className="slider__range bg-gradient-to-r from-pink-500 to-indigo-500"
            />
            <div className="slider__left-value">{minVal}</div>
            <div className="slider__right-value">{maxVal}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

MultiRangeShoeSizeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default MultiRangeShoeSizeSlider;
