import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

function OurBrand2({ id, title, desc }) {
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
            <div className="w-full border-l border-r p-4 font-openSans">
              <p className="mt-4 mb-4">
                The option to discontinue the ADAT is available with the audit
                firms. However, we do not encourage audit firms to discontinue
                the use of ADAT as the audit files already archived by using
                ADAT will not be functional without the ADAT tool.
              </p>

              <p className=" mt-4 mb-4">
                In a scenario wherein the audit firm decides to discontinue the
                ADAT, there are two options available with the audit firms with
                respect to the audit files archived / in progress using ADAT:
              </p>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>
                    Retain the audit files in the ADAT tool by paying a yearly
                    maintenance fees per audit file which will allow audit firms
                    to access the stored audit file. Or
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>
                    will provide the readable version of all the documents in
                    the audit file by paying one-time fee per audit file.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </details>
    </>
  );
}
export default OurBrand2;
