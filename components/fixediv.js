import React from "react";

export default function Fixediv({ clicked }) {
  return (
    <>
      <div className="flex fixed right-0 top-[30%] md:top-[15%]  z-50  flex-col">
        {/* <div className="bg-white">
            <p>close</p>
        </div> */}
        <div className="flex flex-col gap-4  p-1 rounded-lg shadow mt-5 w-fit bg-white  ">
          <div onClick={clicked} className="bg-white">
            <p className="text-center cursor-pointer font-extrabold">x</p>
          </div>
          <a
            className="mx-1.5 text-black transition-colors duration-300 transform hover:text-blue-500"
            href="https://twitter.com/TrueAndFairPro"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src="/icons/twitter.gif" className="w-8 h-8" alt="" />
          </a>

          <a
            className="mx-1.5 text-black transition-colors duration-300 transform hover:text-blue-500"
            href="https://www.linkedin.com/company/true-and-fair-professionals-network/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src="/icons/linkidin.gif" className="w-8 h-8" alt="" />
          </a>

          <a
            className="mx-1.5 text-black mb-2 transition-colors duration-300 transform hover:text-blue-500"
            href="https://www.instagram.com/trueandfairprofessionals/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src="/icons/instagram.gif" className="w-8 h-8" alt="" />
          </a>
          <a
            className="mx-1.5 text-black mb-2 transition-colors duration-300 transform hover:text-blue-500 hover:scale-105 transition-all"
            href="http://youtube.com/@trueandfairprofessionals"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/icons/youtube.gif" className="w-8 h-8" alt="" />
          </a>
        </div>
      </div>
    </>
  );
}
