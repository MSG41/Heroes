import Image from "next/image";
import Link from "next/link";

const HeroCard = ({ hero }) => {
  //console.log(hero);
  return (
    <div
      // max-h-[350px] overflow-auto
      className={` shadow-lg  md:w-[100%] xl:w-[100%] rounded-sm border px-4 py-4 flex hover:border-slate-300 transition duration-300 ease-out hover:ease-in ${
        hero.featuredHero
          ? "bg-amber-50 border-amber-300"
          : "bg-white border-slate-200"
      }	
				`}
    >
      <div className="md:flex justify-between items-center space-y-4 md:space-y-0 space-x-2 w-screen  ">
        {/* Left side */}
        <div className="flex items-start space-x-3 md:space-x-8   ">
          <div className="  max-w-[125px] lg:min-w-[200px]   ">
            <Image
              className="w-9 h-9 rounded-full "
              src={hero.foto.url}
              width={hero.foto.width}
              height={hero.foto.height}
              alt={`${hero.heroName} - ${hero.foto.alt}`}
            />
          </div>
          <div>
            <Link href={`/heroes/${hero.slug}`}>
              <a
                className="inline-flex font-semibold text-slate-1200 text-[24px]"
                href={`/heroes/${hero.slug}`}
              >
                {hero.heroName}
              </a>
            </Link>

            {/* space between */}
            <div>
              <br />
            </div>
            {/* space between */}

            <div className="text-[14px] font-semibold text-slate-800">
              {" "}
              Skills:
              <div className="flex flex-wrap justify-start items-center -m-1">
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

            {/* space between */}
            <div>
              <br />
            </div>
            {/* space between */}
            <div className="text-[14px] font-semibold text-slate-800">
              {" "}
              Gender:
              <div className="flex flex-wrap items-center -m-1">
                <div className="m-1">
                  <a
                    className="text-xs inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1"
                    href="#"
                  >
                    {hero.gender}
                  </a>
                </div>
              </div>
            </div>

            {/* space between */}
            <div>
              <br />
            </div>
            {/* space between */}
            <div className="text-[14px] font-semibold text-slate-800">
              {" "}
              Looks:
              <div className="flex flex-wrap items-center -m-1">
                <div className="m-1">
                  <a
                    className="text-xs inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1"
                    href="#"
                  >
                    {hero.looks}
                  </a>
                </div>
              </div>
            </div>

            {/* space between */}
            <div>
              <br />
            </div>
            {/* space between */}
            <div className="text-[14px] font-semibold text-slate-800">
              {" "}
              Other agency:
              <div className="flex flex-wrap items-center -m-1">
                <div className="m-1">
                  <a
                    className="text-xs inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1"
                    href="#"
                  >
                    {hero.otherAgency}
                  </a>
                </div>
              </div>
            </div>

            {/* space between */}
            {/* <div>
              <br />
            </div> */}
            {/* space between */}
            {/* <div className="text-[14px] font-semibold text-slate-800">
              {" "}
              Hair Color:
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
            </div> */}

            {/* space between */}
            {/* <div>
              <br />
            </div> */}
            {/* space between */}

            {/* <div className="text-[14px] font-semibold text-slate-800">
              {" "}
              Eye Color:
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
            </div> */}

            {/* space between */}
            {/* <div>
              <br />
            </div> */}
            {/* space between */}

            {/* <div className="text-[14px] font-semibold text-slate-800">
              {" "}
              Tattoo:
              <div className="flex flex-wrap items-center -m-1">
                {hero.tattoo &&
                  hero.tattoo.map((tattoo) => (
                    <div className="m-1" key={tattoo}>
                      <a
                        className="text-xs inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1"
                        href="#"
                      >
                        {tattoo}
                      </a>
                    </div>
                  ))}
              </div>
            </div> */}

            {/* space between */}
            {/* <div>
              <br />
            </div> */}
            {/* space between */}

            {/* <div className="text-[14px] font-semibold text-slate-800">
              {" "}
              Scars:
              <div className="flex flex-wrap items-center -m-1">
                {hero.scars &&
                  hero.scars.map((scars) => (
                    <div className="m-1" key={scars}>
                      <a
                        className="text-xs inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1"
                        href="#"
                      >
                        {scars}
                      </a>
                    </div>
                  ))}
              </div>
            </div> */}

            {/* space between */}
            {/* <div>
              <br />
            </div> */}
            {/* space between */}

            {/* space between */}
            {/* <div>
              <br />
            </div> */}
            {/* space between */}

            {/* <div className="text-[14px] font-semibold text-slate-800">
              {" "}
              Invoice:
              <div className="flex flex-wrap items-center -m-1">
                {hero.invoice &&
                  hero.invoice.map((invoice) => (
                    <div className="m-1" key={invoice}>
                      <a
                        className="text-xs inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1"
                        href="#"
                      >
                        {invoice}
                      </a>
                    </div>
                  ))}
              </div>
            </div> */}

            {/* space between */}
            {/* <div>
              <br />
            </div> */}
            {/* space between */}

            {/* <div className="text-[14px] font-semibold text-slate-800">
              {" "}
              Drive:
              <div className="flex flex-wrap items-center -m-1">
                {hero.drive &&
                  hero.drive.map((drive) => (
                    <div className="m-1" key={drive}>
                      <a
                        className="text-xs inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1"
                        href="#"
                      >
                        {drive}
                      </a>
                    </div>
                  ))}
              </div>
            </div> */}

            {/* space between */}
            <div>
              <br />
            </div>
            {/* space between */}

            <div className="text-[14px] font-semibold text-slate-800  ">
              Socials:
              <div className="text-[#3da388]	text-md italic text-slate-500 font-medium hover:font-sans hover:text-yellow-600/90 transition duration-500 hover:ease-in hover:ease-out">
                <a className="break-all" href={hero.socials}>
                  {hero.socials}
                </a>
                {/* {hero.sex}/ {hero.heightInCm} / {hero.company.city}{' '} */}
                {/* {hero.remoteOk && '/ Remote Ok'} */}
                {/* {hero.sex} */}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col space-y-1 items-end">
                <div className="text-md text-slate-900 bg-emerald-600/40 rounded-full text-center px-2.5 py-1 italic">
                  € {hero.dayFee} / Day Fee
                </div>
                <div className="text-sm text-slate-600 bg-emerald-200/50 rounded-full text-center px-2.5 py-1 italic ">
                  € {hero.halfDayFee} / Half-day Fee
                </div>
              </div> */}

        {/* Right side */}
        <div className="flex flex-col space-y-1 items-end">
          {/* <div className="text-sm text-slate-900 bg-emerald-600/40 rounded-full text-center px-2.5 py-1 italic">
            € {hero.dayFee} / Day Fee
          </div>
          <div className="text-xs text-slate-600 bg-emerald-200/50 rounded-full text-center px-2.5 py-1 italic ">
            € {hero.halfDayFee} / Half-day Fee
          </div> */}
          <div className="flex flex-row items-center space-x-4 pl-10 md:pl-0">
            {/* date posted  */}
            {/* <div className='text-sm text-slate-500 italic whitespace-nowrap'>
              {hero.datePosted}
            </div> */}
            {hero.featuredHero && (
              <div
                className={`text-xs inline-flex font-medium rounded-full text-center px-2.5 py-1 bg-amber-100 text-amber-600`}
              >
                Featured
              </div>
            )}
            <button className="text-slate-300 hover:text-slate-400">
              <span className="sr-only">Bookmark</span>
              <svg
                className="w-3 h-4 fill-current"
                width="12"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 0C.9 0 0 .9 0 2v14l6-3 6 3V2c0-1.1-.9-2-2-2H2Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
