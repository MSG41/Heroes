import React, { useCallback, useEffect, useState, useRef } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { FilterIcon } from "@heroicons/react/solid";
import { Switch } from "@headlessui/react";

const SliderHeight = ({ min, max, setSideBarFormState }) => {
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

  const [heightOn, setHeightOn] = useState("");

  const handleHeightChange = (checked) => {
    console.log(checked);

    if (checked) {
      setSideBarFormState((prevState) => {
        return {
          ...prevState,
          minHeight: minVal,
          maxHeight: maxVal,
        };
      });
    } else {
      setSideBarFormState((prevState) => {
        return {
          ...prevState,
          minHeight: prevState.minVal,
          maxHeight: prevState.maxVal,
        };
      });
    }

    setHeightOn(!heightOn);
  };

  useEffect(() => {
    if (heightOn) {
      setSideBarFormState((prevState) => {
        return {
          ...prevState,
          minHeight: minVal,
          maxHeight: maxVal,
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
          onChange={handleHeightChange}
          className={classNames(
            heightOn ? "bg-emerald-600" : "bg-gray-200",
            "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:-ring-2 focus:ring-offset-2 focus:-ring-indigo-500"
          )}
        >
          <span
            aria-hidden="true"
            className={classNames(
              heightOn ? "translate-x-5" : "translate-x-0",
              "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
            )}
          />
        </Switch>
        <Switch.Label as="span" className="ml-3">
          <span className="text-sm font-medium text-green-900 pr-2 ">
            Activate Height Slider
          </span>
        </Switch.Label>
      </Switch.Group>

      <div className={classNames(heightOn ? "flex flex-col" : "  hidden ")}>
        <div className="flex flex-row">
          {" "}
          <FilterIcon
            className="ml-1 mr-2 h-6 w-6 text-gray-400"
            aria-hidden="true"
          />
          <div className="text-sm text-slate-800 font-semibold mb-3">
            Height (cm)
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
              const value = Math.min(+event.target.value, maxVal - 1);
              setMinVal(value);
              event.target.value = value.toString();
            }}
            className={classnames(" thumb thumb--zindex-3", {
              "thumb--zindex-5": minVal > max - 21,
            })}
          />

          <input
            type="range"
            min={min}
            max={max}
            value={maxVal}
            ref={maxValRef}
            onChange={(event) => {
              const value = Math.max(+event.target.value, minVal + 1);
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

SliderHeight.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default SliderHeight;
