import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
function OurBrand7({ id, title, desc }) {
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
          <span className="text-black font-bold ">{title}</span>
          <div className="w-[20%] flex  justify-end md:mt-4">
            {openCloseaction ? <BiMinus size={15} /> : <BsPlusLg size={15} />}
          </div>
        </summary>
        <div>
          <section>
            <div className="w-full p-4 border-l border-r font-openSans">
              <p className="mt-4 mb-4">
                All the audit observations and recommendations need to be
                manually collated from the respective testing working papers in
                ADAT. In the current version of ADAT, this feature is not
                available. This is planned to be included in the next version of
                ADAT.
              </p>
            </div>
          </section>
        </div>
      </details>
    </>
  );
}
export default OurBrand7;
