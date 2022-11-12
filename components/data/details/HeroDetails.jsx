import React from "react";
import Link from "next/link";
import Image from "next/image";

import { ArrowRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";

import HeroCard from "../cards/HeroCard";

const HeroDetails = ({ hero }) => {
  const getAge = (birthDate) =>
    Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);
  var DOB = getAge(hero.age);

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
              {/* <div className='flex items-center space-x-4 pl-10 md:pl-0'>
                  {hero.featuredJob && (
                    <div
                      className={`text-xs inline-flex font-medium rounded-full text-center px-2.5 py-1 bg-amber-100 text-amber-600`}
                    >
                      Featured
                    </div>
                  )}
                  <button className='text-slate-300 hover:text-slate-400 mt-1'>
                    <span className='sr-only'>Bookmark</span>
                    <svg
                      className='w-3 h-4 fill-current'
                      width='12'
                      height='16'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M2 0C.9 0 0 .9 0 2v14l6-3 6 3V2c0-1.1-.9-2-2-2H2Z' />
                    </svg>
                  </button>
                </div> */}
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
            {/* <div className='space-y-2 sm:flex sm:space-y-0 sm:space-x-2'>
              <a
                href={hero.applicationLink}
                className='flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Apply Today
                <ArrowRightIcon
                  className='ml-4 mr-3 h-5 w-5'
                  aria-hidden='true'
                />
              </a>

              <Link href={`/company/${hero.company.slug}`}>
                <a
                  href={`/company/${hero.company.slug}`}
                  className='flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-slate-700 ring-slate-600 bg-slate-200 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-700'
                >
                  All Company Jobs
                  <ArrowRightIcon
                    className='ml-4 mr-3 h-5 w-5'
                    aria-hidden='true'
                  />
                </a>
              </Link>
            </div> */}
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
                      {DOB}
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
            </div>
            <hr className="my-6 border-t border-slate-200" />

            {/* Your Responsabilities */}
            {/* <div>
            <h2 className='text-xl leading-snug text-slate-800 font-bold mb-2'>
              Your Responsabilities
            </h2>
            <div
              className='space-y-6 text-slate-500 font-normal text-sm'
              dangerouslySetInnerHTML={{
                __html: hero.heroResponsibilities,
              }}
            ></div>
          </div>
          <hr className='my-6 border-t border-slate-200' /> */}

            {/* Remuneration */}
            {/* <div>
            <h2 className='text-xl leading-snug text-slate-800 font-bold mb-2'>
              Remuneration
            </h2>
            <div
              className='space-y-6 text-slate-500 font-normal text-sm'
              dangerouslySetInnerHTML={{
                __html: hero.remunerationPackage,
              }}
            ></div>
          </div>
          <hr className='my-6 border-t border-slate-200' /> */}

            {/* Apply section */}
            {/* <div className='mt-6'>
            <p className='font-medium text-slate-800 italic mb-6'>
              Do you have what it takes?
            </p>
            <div className='flex justify-between items-center'> */}

            {/* Apply button */}

            {/* <a
                href={hero.applicationLink}
                className='inline-flex items-center justify-center p-2 bg-indigo-500 hover:bg-indigo-600 text-white'
              >
                Apply Today{' '}
                <ArrowRightIcon
                  className='ml-4 mr-3 h-5 w-5'
                  aria-hidden='true'
                />
              </a> */}
            {/* Share */}
            {/* <div className='flex items-center'>
                <div className='text-sm text-slate-500 italic mr-4'>Share:</div>
                <div className='flex items-center space-x-3'>
                  <button className='text-slate-400 hover:text-indigo-500'>
                    <span className='sr-only'>Share on Twitter</span>
                    <svg
                      className='w-4 h-4 fill-current'
                      viewBox='0 0 16 16'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M16 3.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8Z' />
                    </svg>
                  </button>
                  <button className='text-slate-400 hover:text-indigo-500'>
                    <span className='sr-only'>Share on Facebook</span>
                    <svg
                      className='w-4 h-4 fill-current'
                      viewBox='0 0 16 16'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M6.023 16 6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023Z' />
                    </svg>
                  </button>
                  <button className='text-slate-400 hover:text-indigo-500'>
                    <span className='sr-only'>Share on Linkedin</span>
                    <svg
                      className='w-4 h-4 fill-current'
                      viewBox='0 0 16 16'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M0 1.146C0 .514.53 0 1.182 0h13.635C15.471 0 16 .513 16 1.146v13.708c0 .633-.53 1.146-1.183 1.146H1.182C.53 16 0 15.487 0 14.854V1.146ZM4.862 13.39V6.187H2.468v7.203h2.394ZM3.666 5.203c.834 0 1.354-.553 1.354-1.244-.016-.707-.52-1.245-1.338-1.245-.82 0-1.355.538-1.355 1.245 0 .691.52 1.244 1.323 1.244h.015Zm2.522 8.187h2.394V9.368c0-.215.015-.43.078-.584.173-.43.567-.876 1.229-.876.866 0 1.213.66 1.213 1.629v3.853h2.394V9.26c0-2.213-1.181-3.242-2.756-3.242-1.292 0-1.86.722-2.174 1.213h.016V6.187H6.188c.03.676 0 7.203 0 7.203Z' />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr className='my-6 border-t border-slate-200' /> */}

            {/* Related Heroes */}
            {/* {hero.relatedhero.length ? (
            <div>
              <h2 className='text-xl leading-snug text-slate-800 font-bold mb-6'>
                Related hero
              </h2>
              <div className='space-y-2 mt-6'>
                {hero.relatedhero.map((hero) => {
                  return <HeroCard key={hero.id} hero={hero} />;
                })}
              </div>
            </div>
          ) : null} */}
          </div>
        </div>

        {/* Sidebar */}
        <div className="hidden lg:block space-y-4 ">
          {/* Company information (desktop) */}
          <div className="bg-white p-5 shadow-lg rounded-sm border border-slate-200 ">
            <div className="text-center mb-0 ">
              <div className="inline-flex mb-3  ">
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
              {/* <div className='text-sm text-slate-500 italic'>
                {hero.crew}
              </div> */}

              <div className="text-[#3da388]	 text-slate-500 font-serif hover:font-serif hover:text-yellow-600/90 transition duration-500 hover:ease-in hover:ease-out">
                <a className="break-all italic" href={hero.socials}>
                  {hero.socials}
                </a>
              </div>
            </div>
            {/* <div className='space-y-2'>
              <a
                href={hero.applicationLink}
                className='inline-flex items-center justify-center w-full p-2 bg-indigo-500 hover:bg-indigo-600 text-white'
              >
                Apply Today{' '}
                <ArrowRightIcon
                  className='ml-4 mr-3 h-5 w-5'
                  aria-hidden='true'
                />
              </a>

              <Link href={`/company/${hero.company.slug}`}>
                <a
                  href={`/company/${hero.company.slug}`}
                  className='flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-slate-700 ring-slate-600 bg-slate-200 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-700'
                >
                  All Company Jobs
                  <ArrowRightIcon
                    className='ml-4 mr-3 h-5 w-5'
                    aria-hidden='true'
                  />
                </a>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDetails;
