import Image from 'next/image';
import Link from 'next/link';

const HeroCard = ({ hero }) => {
  //console.log(hero);
  return (
    <div
      className={`shadow-lg rounded-sm border px-5 py-4 ${hero.featuredHero
        ? 'bg-amber-50 border-amber-300'
        : 'bg-white border-slate-200'
        }`}
    >
      <div className='md:flex justify-between items-center space-y-4 md:space-y-0 space-x-2'>
        {/* Left side */}
        <div className='flex items-start space-x-3 md:space-x-4'>
          <div className='object- w-[150px]	 h-[250px]   '>
            <Image

              className='w-9 h-9 rounded-full '
              src={hero.foto.url}
              width={hero.foto.width}
              height={hero.foto.height}
              alt={`${hero.heroName} - ${hero.foto.alt}`}
            />
          </div>
          <div>
            <Link href={`/heroes/${hero.slug}`}>
              <a
                className='inline-flex font-semibold text-slate-800'
                href={`/heroes/${hero.slug}`}
              >
                {hero.heroName}
              </a>
            </Link>




            <div> Skills:
              <div className='flex flex-wrap items-center -m-1'>
                {hero.skills &&
                  hero.skills.map((skill) => (
                    <div className='m-1' key={skill}>
                      <a
                        className='text-xs inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1'
                        href='#'
                      >
                        {skill}
                      </a>
                    </div>
                  ))}

              </div>
            </div>



            <div className='text-sm text-slate-500'>
              <a href={hero.socials}>{hero.socials}</a> 
              {/* {hero.sex}/ {hero.heightInCm} / {hero.company.city}{' '} */}
              {/* {hero.remoteOk && '/ Remote Ok'} */}
              {/* {hero.sex} */}
            </div>


          </div>


        </div>


        {/* Right side */}
        <div className='flex flex-col space-y-1 items-end'>
          <div className='text-sm text-slate-900'>
            €{hero.baseAnnualSalary} / Year
          </div>
          <div className='flex items-center space-x-4 pl-10 md:pl-0'>
            <div className='text-sm text-slate-500 italic whitespace-nowrap'>
              {hero.datePosted}
            </div>
            {hero.featuredHero && (
              <div
                className={`text-xs inline-flex font-medium rounded-full text-center px-2.5 py-1 bg-amber-100 text-amber-600`}
              >
                Featured
              </div>
            )}
            <button className='text-slate-300 hover:text-slate-400'>
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
          </div>
        </div>


      </div>
    </div>
  );
};

export default HeroCard;
