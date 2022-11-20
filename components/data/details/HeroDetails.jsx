import React from "react";
import Link from "next/link";
import Image from "next/image";

import { ChevronLeftIcon } from "@heroicons/react/solid";

const HeroDetails = ({ hero }) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full">
      {/* Page content */}
      <div className="max-w-7xl mt-6  flex flex-col lg:flex-row lg:space-x-8 xl:space-x-16">
        {/* Content */}
        <div>
          <div className="mb-6">
            <Link href="/">
              <a className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg shadow-indigo-900/40">
                <ChevronLeftIcon className="mr-3 h-5 w-5" aria-hidden="true" />
                Back To Heroes
              </a>
            </Link>
          </div>
          <div className="text-xs text-slate-500 italic mb-2">
            Posted On: <span className="font-semibold">{hero.datePosted}</span>
            {"  -  "}
            Hero Name:{" "}
            <span className="font-semibold">{hero.heroCategory}</span>
          </div>
          <header className="mb-4">
            {/* Title */}
            <h1 className="text-2xl md:text-3xl text-slate-1200 font-bold ">
              {hero.heroName}
            </h1>

            {/* Important Job Details */}
            <div className="md:flex justify-between items-center space-y-4 md:space-y-0 space-x-2 ">
              {/* Left side */}
              <div className="flex items-start space-x-3 md:space-x-4 ">
                <div>
                  <div className="text-sm text-slate-500 pt-3">
                    {hero.company.city} / {hero.crew} / {hero.region}
                  </div>
                  {/* Skill Tags */}
                  <div>
                    <div className="flex flex-wrap items-center pt-3">
                      {hero.skills &&
                        hero.skills.map((skill) => (
                          <div className="m-1" key={skill}>
                            <a
                              className="text-xs inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1"
                              href="#"
                            >
                              {skill}
                            </a>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Right side */}
              <div className="flex flex-col space-y-1 items-end">
                <div className="text-md text-slate-900 bg-emerald-600/40 rounded-full text-center px-2.5 py-1 italic">
                  € {hero.dayFee} / Day Fee
                </div>
                <div className="text-xs text-slate-600 bg-emerald-200/50 rounded-full text-center px-2.5 py-1 italic ">
                  € {hero.halfDayFee} / Half-day Fee
                </div>
              </div>
            </div>
          </header>

          {/* Company information (mobile) */}
          <div className="bg-white p-5 shadow-lg rounded-sm border border-slate-200 mb-0 lg:hidden">
            <div className="text-center mb-0">
              <div className=" mb-3 ">
                <Image
                  className="w-[600px] h-[500px] rounded-full "
                  src={hero.foto.url}
                  width="500px"
                  height="500px"
                  alt={`${hero.heroName} - ${hero.foto.alt}`}
                />
              </div>
              <div className="text-lg font-bold text-slate-800 mb-1">
                {hero.heroName}
              </div>
              <div className="text-emerald-500/70	 text-slate-500 font-serif hover:font-serif hover:text-violet-500/90 transition duration-500 hover:ease-in hover:ease-out">
                <a className="break-all italic" href={hero.socials}>
                  {hero.socials}
                </a>
              </div>
            </div>
          </div>

          <hr className="my-6 border-t border-slate-200" />

          {/* The Hero Bio */}
          <div>
            <h2 className="text-xl leading-snug text-slate-800 font-bold mb-2 ">
              Hero BIO en info
            </h2>
            <div
              className=" space-y-6 text-slate-500 font-normal text-sm max-w-[500px]"
              dangerouslySetInnerHTML={{
                __html: hero.heroDescription,
              }}
            ></div>
          </div>
          <hr className="my-6 border-t border-slate-200" />

          {/*  */}
          <div>
            <h2 className="text-xl leading-snug text-slate-800 font-bold mb-2 ">
              Specs
            </h2>

            <div className=" xs:grid xs:grid-cols-3	xl:flex-inline xl:justify-start ">
              <div className="text-[14px] font-semibold text-slate-800 mt-6 ">
                {" "}
                Age
                <div className="flex flex-wrap items-left -m-1">
                  <div className="m-1">
                    <a
                      className="text-xs inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1"
                      href="#"
                    >
                      {/* {age} raw data birthday : {hero.birthday} */}
                      {hero.age}
                      {/* B-Day: {hero.birthday} */}
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-[14px] font-semibold text-slate-800 mt-6 ">
                {" "}
                Invoice
                <div className="flex flex-wrap items-left -m-1">
                  <div className="m-1">
                    <a
                      className="text-xs inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1"
                      href="#"
                    >
                      {hero.heroInvoice}
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-[14px] font-semibold text-slate-800 mt-6 ">
                {" "}
                Drive
                <div className="flex flex-wrap items-center -m-1">
                  <div className="m-1">
                    <a
                      className="text-xs inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1"
                      href="#"
                    >
                      {hero.driver}
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-[14px] font-semibold text-slate-800 mt-6 ">
                {" "}
                Scars
                <div className="flex flex-wrap items-center -m-1">
                  <div className="m-1">
                    <a
                      className="text-xs inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1"
                      href="#"
                    >
                      {hero.scar}
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-[14px] font-semibold text-slate-800 mt-6 ">
                {" "}
                Tattoo
                <div className="flex flex-wrap items-center -m-1">
                  <div className="m-1">
                    <a
                      className="text-xs inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1"
                      href="#"
                    >
                      {hero.heroTattoo}
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-[14px] font-semibold text-slate-800 mt-6 ">
                {" "}
                Hair Color
                <div className="flex flex-wrap items-center -m-1">
                  <div className="m-1">
                    <a
                      className="text-xs inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1"
                      href="#"
                    >
                      {hero.hairColor}
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-[14px] font-semibold text-slate-800 mt-6 ">
                {" "}
                Shoe Size
                <div className="flex flex-wrap items-center -m-1">
                  <div className="m-1">
                    <a
                      className="text-xs inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1"
                      href="#"
                    >
                      {hero.shoeSize}
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-[14px] font-semibold text-slate-800 mt-6 ">
                {" "}
                Height
                <div className="flex flex-wrap items-center -m-1">
                  <div className="m-1">
                    <a
                      className="text-xs inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1"
                      href="#"
                    >
                      {hero.height}
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-[14px] font-semibold text-slate-800 mt-6 ">
                {" "}
                Eye Color
                <div className="flex flex-wrap items-center -m-1">
                  <div className="m-1">
                    <a
                      className="text-xs inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1"
                      href="#"
                    >
                      {hero.eyeColor}
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-[14px] font-semibold text-slate-800 mt-6 ">
                {" "}
                SetCard Link
                <div className="flex flex-wrap items-center -m-1">
                  <div className="m-1">
                    {" "}
                    <a
                      id="setcard"
                      className=" link text-[250%] flex justify-center font-medium rounded-full text-center px-2.5 py-1"
                      download
                      // href={hero.setcard.fields.file.url}
                    >
                      🔖
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-6 border-t border-slate-200" />
          </div>
        </div>

        {/* Sidebar */}
        <div className="hidden lg:block  space-y-4 ">
          {/* Company information (desktop) */}
          <div className="bg-white  lg:ml-[10vw] p-5 shadow-lg rounded-sm border border-slate-200 ">
            <div className="text-center mb-0 ">
              <div className="inline-flex mb-3  ">
                <Image
                  className="w-[500px] h-[500px] rounded-full "
                  src={hero.foto.url}
                  width="500px"
                  height="500px"
                  alt={`${hero.heroName} - ${hero.foto.alt}`}
                />
              </div>
              <div className="text-lg font-bold text-slate-800 mb-1">
                {hero.heroName}
              </div>

              <div className="text-[#3da388]	 text-slate-500 font-serif hover:font-serif hover:text-yellow-600/90 transition duration-500 hover:ease-in hover:ease-out">
                <a className="break-all italic" href={hero.socials}>
                  {hero.socials}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDetails;
