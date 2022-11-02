import React, { useCallback, useEffect, useState, useRef } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { FilterIcon } from "@heroicons/react/solid";

const MultiRangeShoeSizeSlider = ({ min, max, onChange }) => {
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
    // rotate the shoe while sliding
    // const input = document.querySelector("input");

    // input.addEventListener("input", (event) => {
    //   const value = Number(input.value) / 100;
    //   input.style.setProperty("--thumb-rotate", `${value * 360}deg`);
    // });

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
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className="flex flex-col">
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
            const value = Math.min(+event.target.value, maxVal - 1);
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
            const value = Math.max(+event.target.value, minVal + 1);
            setMaxVal(value);
            event.target.value = value.toString();
          }}
          className="thumb thumb--zindex-4"
        />
        <div className="slider">
          <div className="slider__track" />
          <div ref={range} className="slider__range" />
          <div className="slider__left-value">{minVal}</div>
          <div className="slider__right-value">{maxVal}</div>
        </div>
      </div>
    </div>
  );
};

MultiRangeShoeSizeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MultiRangeShoeSizeSlider;
