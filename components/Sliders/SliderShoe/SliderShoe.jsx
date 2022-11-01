import { FilterIcon } from "@heroicons/react/solid";
import { React, useEffect } from "react";

const SliderShoe = () => {
  useEffect(() => {
    //     // window is accessible here.

    var inputLeft = document.getElementById("input-left");
    var inputRight = document.getElementById("input-right");

    var thumbLeft = document.querySelector(".slider > .thumb.left");
    var thumbRight = document.querySelector(".slider > .thumb.right");
    var range = document.querySelector(".slider > .range");

    function setLeftValue() {
      var _this = inputLeft,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

      _this.value = Math.min(
        parseInt(_this.value),
        parseInt(inputRight.value) - 1
      );

      var percent = ((_this.value - min) / (max - min)) * 100;

      thumbLeft.style.left = percent + "%";
      range.style.left = percent + "%";
    }
    setLeftValue();

    function setRightValue() {
      var _this = inputRight,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

      _this.value = Math.max(
        parseInt(_this.value),
        parseInt(inputLeft.value) + 1
      );

      var percent = ((_this.value - min) / (max - min)) * 100;

      thumbRight.style.right = 100 - percent + "%";
      range.style.right = 100 - percent + "%";
    }
    setRightValue();

    inputLeft.addEventListener("input", setLeftValue);
    inputRight.addEventListener("input", setRightValue);

    inputLeft.addEventListener("mouseover", function () {
      thumbLeft.classList.add("hover");
    });
    inputLeft.addEventListener("mouseout", function () {
      thumbLeft.classList.remove("hover");
    });
    inputLeft.addEventListener("mousedown", function () {
      thumbLeft.classList.add("active");
    });
    inputLeft.addEventListener("mouseup", function () {
      thumbLeft.classList.remove("active");
    });

    inputRight.addEventListener("mouseover", function () {
      thumbRight.classList.add("hover");
    });
    inputRight.addEventListener("mouseout", function () {
      thumbRight.classList.remove("hover");
    });
    inputRight.addEventListener("mousedown", function () {
      thumbRight.classList.add("active");
    });
    inputRight.addEventListener("mouseup", function () {
      thumbRight.classList.remove("active");
    });
  }, []);

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
      <div class="middle">
        <div class="multi-range-slider">
          <input type="range" id="input-left" min="0" max="100" value="25" />
          <input type="range" id="input-right" min="0" max="100" value="75" />
          <div class="slider">
            <div class="track"></div>
            <div class="range"></div>
            <div class="thumb left"></div>
            <div class="thumb right"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <div class="col-md-6 caption">
          <strong>Min:</strong> <span id="slider-range-value1"></span>
        </div>
        <div class="col-md-6 text-right caption">
          <strong>Max:</strong> <span id="slider-range-value2"></span>
        </div>
      </div>
    </div>
  );
};
export default SliderShoe;
