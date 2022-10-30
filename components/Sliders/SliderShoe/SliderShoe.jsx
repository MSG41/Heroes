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

  //   useEffect(() => {
  //     // window is accessible here.

  //     console.log("window.innerHeight", window.innerHeight);

  //     window.addEventListener("DOMContentLoaded", () => {
  //       new dualRangeSlider(document.querySelector(".dual-range"));
  //     });

  //     class dualRangeSlider {
  //       constructor(rangeElement) {
  //         this.range = rangeElement;
  //         this.min = Number(rangeElement.dataset.min);
  //         this.max = Number(rangeElement.dataset.max);
  //         this.handles = [...this.range.querySelectorAll(".handle")];
  //         this.startPos = 0;
  //         this.activeHandle;

  //         this.handles.forEach((handle) => {
  //           handle.addEventListener("mousedown", this.startMove.bind(this));
  //           handle.addEventListener("touchstart", this.startMoveTouch.bind(this));
  //         });

  //         window.addEventListener("mouseup", this.stopMove.bind(this));
  //         window.addEventListener("touchend", this.stopMove.bind(this));
  //         window.addEventListener("touchcancel", this.stopMove.bind(this));
  //         window.addEventListener("touchleave", this.stopMove.bind(this));

  //         const rangeRect = this.range.getBoundingClientRect();
  //         const handleRect = this.handles[0].getBoundingClientRect();
  //         this.range.style.setProperty("--x-1", "0px");
  //         this.range.style.setProperty(
  //           "--x-2",
  //           rangeRect.width - handleRect.width / 2 + "px"
  //         );
  //         this.handles[0].dataset.value = this.range.dataset.min;
  //         this.handles[1].dataset.value = this.range.dataset.max;
  //       }

  //       startMoveTouch(e) {
  //         const handleRect = e.target.getBoundingClientRect();
  //         this.startPos = e.touches[0].clientX - handleRect.x;
  //         this.activeHandle = e.target;
  //         this.moveTouchListener = this.moveTouch.bind(this);
  //         window.addEventListener("touchmove", this.moveTouchListener);
  //       }

  //       startMove(e) {
  //         this.startPos = e.offsetX;
  //         this.activeHandle = e.target;
  //         this.moveListener = this.move.bind(this);
  //         window.addEventListener("mousemove", this.moveListener);
  //       }

  //       moveTouch(e) {
  //         this.move({ clientX: e.touches[0].clientX });
  //       }

  //       move(e) {
  //         const isLeft = this.activeHandle.classList.contains("left");
  //         const property = isLeft ? "--x-1" : "--x-2";
  //         const parentRect = this.range.getBoundingClientRect();
  //         const handleRect = this.activeHandle.getBoundingClientRect();
  //         let newX = e.clientX - parentRect.x - this.startPos;
  //         if (isLeft) {
  //           const otherX = parseInt(this.range.style.getPropertyValue("--x-2"));
  //           newX = Math.min(newX, otherX - handleRect.width);
  //           newX = Math.max(newX, 0 - handleRect.width / 2);
  //         } else {
  //           const otherX = parseInt(this.range.style.getPropertyValue("--x-1"));
  //           newX = Math.max(newX, otherX + handleRect.width);
  //           newX = Math.min(newX, parentRect.width - handleRect.width / 2);
  //         }
  //         this.activeHandle.dataset.value = this.calcHandleValue(
  //           (newX + handleRect.width / 2) / parentRect.width
  //         );
  //         this.range.style.setProperty(property, newX + "px");
  //       }

  //       calcHandleValue(percentage) {
  //         return Math.round(percentage * (this.max - this.min) + this.min);
  //       }

  //       stopMove() {
  //         window.removeEventListener("mousemove", this.moveListener);
  //         window.removeEventListener("touchmove", this.moveTouchListener);
  //       }
  //     }
  //   }, []);

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
