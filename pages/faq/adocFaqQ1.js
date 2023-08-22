import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

function AdocFaqQ1({ id, title, desc }) {
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
            <div className="w-full p-4 border-l border-r font-openSans">
              <p className="mt-4 mb-4">
                The Audit Documentation Content (ADOC), represents the core
                content created by which serves as the base for the yet to be
                launched Audit Documentation and Archival Tool (ADAT). Based on
                feedback consistently received from various audit firms wherein
                they have expressed an interest to use this content pending the
                launch of A DAT.
              </p>
              <p className="mt-4 mb-4">
                ADOC currently provides an exhaustive library of all the content
                within a detailed Index, so as too facilitate auditors to plan a
                comprehensive audit of the Financial Statements including
                reporting. The content is based currently on the Ind AS
                framework and in accordance with the Indian Auditing Standards,
                with the said reference content being in the form of MS Excel
                templates, which are easy to use and update
              </p>
              <p className="mt-4 mb-4">
                ADOC can be used by the audit firms for performing, documenting
                and archiving their audit engagements as well as be used as a
                reference library when audit is performed using other
                documentation tools or outside of the ADOC environment.
              </p>
            </div>
            <div className="w-full border-l border-r font-openSans">
              <p className=" p-1 mt-4 mb-2 md:pl-5 ">
                Advantages of using ADOC
              </p>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>Easy to use and provides on the job training</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>
                    Standardized and exhaustive document templates leading to
                    consistency in the performance of audits
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>Minimizing Partner / Manager review time</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>
                    Investment made in Year 1 of using ADOC can be significantly
                    leveraged when performing audits for the subsequent years
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>
                    ADOC includes sampling templates for sampling based on
                    monetary units and sampling on random basise
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>
                    {" "}
                    The Trial Balance feature enables the auditor to match the
                    grouped amounts in the Trial Balance with the Financial
                    Statements
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>
                    Comprehensive library of checklists to facilitate auditors
                    meet the reporting requirements under the Companies Act
                  </p>
                </div>
              </div>

              <p className="font-openSans pt-5 pb-5 md:pl-5">
                Salient Features of ADOC
              </p>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>
                    Guiding questions to enable the auditors to seek and obtain
                    relevant information for performing the audit{" "}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>
                    Exhaustive library of risks, controls, IUC’s and IPE’s for
                    each Financial Statement Note or Financial Statement Line
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>
                    Exhaustive library of risks and controls for performing
                    audit of the IT environment
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>
                    Template for testing “Design and Implementation” and
                    “Operating Effectiveness” of controls
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>
                    Exhaustive library of content for performing group audit{" "}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[2%] md:pl-5">-</div>
                <div>
                  <p>
                    Comprehensive workpapers for testing cash flows, going
                    concern and subsequent events
                  </p>
                </div>
              </div>

              <div className="w-full p-4 border-l border-r font-openSans">
                <p className=" p-1 mt-4 mb-2 md:pl-5 ">
                  Security and confidentiality
                </p>
                <p className="mt-4 mb-4">
                  ADOC leverages on the security features inbuilt in Microsoft
                  Azure cloud and SharePoint environment. The ADOC environment
                  is also being subjected to an independent security audit
                  covering confidentiality, integrity and availability
                  principles inter-alia to assure the audit firms that True and
                  Fair will not have direct access to the information contained
                  in the audit files that are hosted in ADOC.
                </p>
              </div>
            </div>
          </section>
        </div>
      </details>
    </>
  );
}
export default AdocFaqQ1;
