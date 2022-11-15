import React, { useCallback, useEffect, useState, useRef } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { FilterIcon } from "@heroicons/react/solid";
import { Switch } from "@headlessui/react";

const SliderAge = ({ min, max, setSideBarFormState }) => {
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

  const [ageOn, setageOn] = useState("");

  const handleAgeChange = (checked) => {
    console.log(checked);

    // const getAge = (birthDate) =>
    //   Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);

    if (checked) {
      setSideBarFormState((prevState) => {
        prevState["minage"] = minVal;
        prevState["maxage"] = maxVal;
        return prevState;
      });
    } else {
      setSideBarFormState((prevState) => {
        prevState["minage"] = minVal;
        prevState["maxage"] = maxVal;
        return prevState;
      });
    }

    setageOn(!ageOn);
  };

  useEffect(() => {
    if (ageOn) {
      setSideBarFormState((prevState, minage, maxage) => {
        prevState[minage] = minVal;
        prevState[maxage] = maxVal;
        return prevState;
      });
    } else {
      setSideBarFormState((prevState) => {
        delete prevState["minage"];
        delete prevState["maxage"];
        return prevState;
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
          onChange={handleAgeChange}
          className={classNames(
            ageOn ? "bg-emerald-600" : "bg-gray-200",
            "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:-ring-2 focus:ring-offset-2 focus:-ring-indigo-500"
          )}
        >
          <span
            aria-hidden="true"
            className={classNames(
              ageOn ? "translate-x-5" : "translate-x-0",
              "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
            )}
          />
        </Switch>
        <Switch.Label as="span" className="ml-3">
          <span className="text-sm font-medium text-green-900 pr-2 ">
            Activate Age Slider
          </span>
        </Switch.Label>
      </Switch.Group>

      <div className={classNames(ageOn ? "flex flex-col" : "  hidden ")}>
        <div className="flex flex-row">
          {" "}
          <FilterIcon
            className="ml-1 mr-2 h-6 w-6 text-gray-400"
            aria-hidden="true"
          />
          <div className="text-sm text-slate-800 font-semibold mb-3">Age</div>
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
            className={classnames(" thumb thumb--zindex-3", {
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
            className="thumb thumb--zindex-4 "
          />
          <div className="slider">
            <div className="slider__track" />
            <div
              ref={range}
              className="slider__range bg-gradient-to-r from-pink-500 to-indigo-500"
            />
            <div className="slider__left-value ">{minVal}</div>
            <div className="slider__right-value">{maxVal}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

SliderAge.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default SliderAge;
