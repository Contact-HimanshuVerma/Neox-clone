import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

function OurBrandSec({ id, title, desc }) {
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
            <div className="w-full border-l border-r font-openSans">
              <p className=" p-1 mt-4 mb-2 md:pl-5 ">
                {` A. It's not really a bother. Just how waste is collected in
                bins, it can be collected in the machine. The one-time
                investment is invaluable, not only do you tremendously reduce
                your carbon footprint, you also save on handling costs in the
                long term. ​`}
              </p>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>Cost per Kg with the Neo-X is Rs.3/Kg</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p className="text-red-500">
                    Cost per Kg with the centralised process ~Rs.30/Kg to
                    Rs.60/Kg
                  </p>
                </div>
              </div>

              <p className=" p-1 mt-4 mb-2 md:pl-5 ">
                {`  There are plenty of direct and indirect costs associated with the present, centralised system that fall back on you; Plumbing, transport, storing, segregating, along with the medical costs incurred by the government due to landfills, open-burning are ultimately borne the public. ​`}
              </p>
            </div>
          </section>
        </div>
      </details>
    </>
  );
}
export default OurBrandSec;
