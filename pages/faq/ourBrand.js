import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

function OurBrand({ id, title, desc }) {
  const [openCloseaction, setOpenCloseaction] = useState(false);
  const clickopen = () => {
    setOpenCloseaction((prev) => !prev);
  };
  return (
    <>
      <details key={id} className="  flex   flex-col">
        <summary
          onClick={clickopen}
          className="border  shadow-sm w-full  rounded flex  p-4 h-full justify-between"
        >
          <p className="text-black font-bold w-full">{title}</p>{" "}
          <div className="w-[20%] flex  justify-end md:mt-4">
            {openCloseaction ? <BiMinus size={15} /> : <BsPlusLg size={15} />}
          </div>
        </summary>
        <div>
          <section>
            <div className="w-full border-l border-r text-lg font-openSans">
              <p className=" p-1 mt-4 mb-2 md:pl-5 ">
                A. Sanitary waste and Medical waste are the main uses;
              </p>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p> Sanitary napkins</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>Face Masks (N-95, cloth masks)</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>Tampons</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>Toxic Cloth-Waste (from factories/industries)</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p> Cotton/fabric waste </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>Band-aids, Medical Gauze and related reject waste</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>Cigarette butts</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>
                    Single use paper cups/plates/packaging (plastic coated,
                    non-biodegradable waste)
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>Contaminated Tissues</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </details>
    </>
  );
}
export default OurBrand;
