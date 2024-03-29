import { PhoneIcon } from "@heroicons/react/solid";
import Image from "next/image";
import TiaBanner from "../../public/images/TiaBanner.png";
import TiaBanner2 from "../../public/images/TiaBanner2.png";
// import Blobs from "./Blobs";

const profile = {
  name: "Inhuman Finder",
  role: "Search Engine",
  companyURL: "https://theinhumansagency.com/",
  companyName: "The Inhumans Agency",
  email: "hello@theinhumansagency.com",
  message: "Please use this search engine to find your inhuman.",
  callToActionURL: "tel:+31207371018",
  callToActionMessage: "Contact us if you can't find your hero!",
  profileImage: TiaBanner2,
  coverImage: TiaBanner,
};

export default function Header() {
  return (
    <div>
      <div className="mb-8">
        <div className="relative h-60 w-full lg:h-64">
          {/* <div className="blur-[0.15rem] border-hidden w-[100%] h-[100%]">
            <Blobs />
          </div> */}
          <Image
            className="object-contain scale-[0.8]"
            src={profile.coverImage}
            layout="fill"
            alt={`services offered by ${profile.companyName} - & S.T.`}
          />
        </div>
        <div className=" xl:flex xl:w-[100%] xl:justify-around px-4 sm:px-6 lg:px-8">
          <div className="-mt-0 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            {/* <div className="flex">
              <div className="relative md:h-[180px] md:w-[180px] h-[200px] w-[200px] mb-3 rounded-full ring-4 ring-[#fac805] sm:h-28 sm:w-28">
                <Image
                  className="rounded-full object-cover"
                  src={profile.profileImage}
                  layout="fill"
                  alt={`profile picture ${profile.name}`}
                />
              </div>
            </div> */}
            <div className="mt-4 sm:mt-12 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div className="sm:hidden md:block mt-6 min-w-0 flex-1">
                <h1 className=" text-[3em] font-bold text-gray-900 xl:mr-[30vw]">
                  {profile.name}
                </h1>
                {/* <p className="text-sm font-medium text-gray-500">
                  {profile.role} Powered By{" "}
                  <a
                    href={profile.companyURL}
                    className="text-gray-900 hover:text-liftedgreen-700"
                  >
                    {profile.companyName}
                  </a>{" "}
                </p> */}
                <p className="text-sm mt-4 mb-6 font-light text-liftedgreen-600">
                  {profile.message}
                </p>
              </div>
              <div className="mt-4 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                <a
                  href={profile.callToActionURL}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-liftedgreen-800 hover:bg-liftedgreen-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-liftedgreen-500"
                >
                  <PhoneIcon
                    className="-ml-1 mr-2 h-5 w-5"
                    aria-hidden="true"
                  />
                  {profile.callToActionMessage}
                </a>
              </div>
            </div>
          </div>

          <div className="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
            <h1 className="text-2xl font-bold text-gray-900 truncate">
              {profile.name}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
