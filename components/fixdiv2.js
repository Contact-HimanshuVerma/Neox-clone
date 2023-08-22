import React from "react";
import Link from "next/link";
export default function Fixediv2({ clickedThree }) {
  return (
    <>
      <div className="flex fixed right-0   bottom-0 md:top-[65%]  z-50  flex-col">
        {/* <div className="bg-white">
            <p>close</p>
        </div> */}

        <div className="flex flex-col   p-1 rounded-lg shadow mt-5 w-fit bg-white  ">
          <div
            onClick={clickedThree}
            className="bg-white flex justify-end mr-2"
          >
            <p className="text-center cursor-pointer font-extrabold">x</p>
          </div>
          <div className="flex justify-center">
            <p className=" mt-1 font-openSans font-bold text-lg px-3  text-center">
              Upcoming Webinars
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-openSans text-xs text-center mt-1 pt-4 pb-2">
              Facilitating Formation of <br /> CA Firm Networks
            </p>{" "}
            <p className="font-openSans text-xs text-center mt-1 py-4 px-5">
              Webinar - Audit <br /> Documentation & Archival Tool
            </p>
          </div>
          <div className="flex mb-2 justify-center">
            <button
              onClick={clickedThree}
              className=" mt-1 mb-1     font-bold text-xs cursor-pointer    transition-all   text-black border-2 border-black hover:bg-blue  hover:text-white rounded-lg px-2 py-2 font-openSans"
            >
              <Link href={"/events"}>VIEW DETAILS</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
