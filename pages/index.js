import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import Whyworkwithus from "../components/Whyworkwithus";
import Clients from "../components/clients";
import SectionFour from "../components/sectionFour";
import SectionOne from "../components/sectionOne";
import SectionThree from "../components/sectionThree";
import SectionTwo from "../components/sectiontwo";
//import Testimonials from "../components/testimonials";
import BackgroundImage from "../components/BackgroundImage";
import { Animation, Typer } from "react-easy-animations";

const rightIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12 text-white"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
    });
  }, []);
  const whytf = [
    {
      id: 1,
      title: "Increased stakeholder expectations  ",
      text: "NFRA has issued multiple Audit Quality Review Reports and has reported Audit Quality failures. The consequential implication of these reports has been monetary penalties and banning the auditor from audit practice.",
    },
    {
      id: 2,
      title: "The expectation of joint audits ",
      text: "Corporates that need joint audits and their current sole auditors will expect the other audit firm to meet audit quality expectations and carry the necessary expertise to perform large audits. Notwithstanding whether joint audits are mandatory or not, the policies and guidance provided by  are aimed at enhancing the quality of audits by audit firms. The audit quality policies and procedures that will be laid out by  and the audit guidance and the Audit Documentation and Archival Tool (ADAT)/ Audit Documentation Content (ADOC) that is being developed/ developed by  is scalable for large audit requirements.",
    },
    {
      id: 3,
      title: "Unify a divergent practice ",
      text: "Most of the audit firms in India are highly diverse, with fragmented professional practices.  aims to build capacity and enhance the capabilities of audit firms by providing a common platform for audit quality, best practices and policies, technical guidance, documentation tools and access to audit specialists, so that the audit firms can network and collaborate for their collective success and growth, delivering high quality audit services.",
    },
  ];
  const whyworkwithus = [
    {
      id: 1,
      title: "Templatized Audits",
      text: "Predefined folders and customisable templates for each auditor to choose from, based on the audit engagement model and sector.",
    },
    {
      id: 2,
      title: "Secure Environment",
      text: "Controlled and secure workspace to collaborate with clients, upload and work on audit files without conflicts, track and establish required documentation.",
    },
    {
      id: 3,
      title: "Review Mechanisms",
      text: "Workflows for approvals, reviews with comments and version control, and in-tool communication channels for all. ",
    },
    {
      id: 4,
      title: "Data Archival",
      text: "Encrypted and archived audit data with timely backups. Reuse of prefilled documents for consistency and productivity.",
    },
    {
      id: 5,
      title: "Reports & Analytics",
      text: "Pre-built and custom library of reports and data analytics for comprehensive insights, as per the audit requirements.",
    },
  ];
  const missvis = [
    {
      id: 1,
      title: " OUR VISION AND MISSION",
      text: "Our overarching vision is to be recognised as the STANDARD SETTER in the financial reporting ecosystem regarding quality of audits undertaken and performed. To achieve our vision, our mission is to build capacity and enhance the professional capability and quality of audits performed by audit firms.",
    },
  ];

  const offerings = [
    {
      id: 1,
      name1: " To Auditing Firms",
      name2: "",
      images: "/servadat/auditcomp.png",
      links: "/services#AuditingFirms",
    },
    {
      id: 2,
      name1: " Practical Training ",
      name2: "& Development",
      images: "/servadat/proftraining.png",
      links: "/services#CharteredAccount",
    },
    {
      id: 3,
      name1: " To Corporates",
      name2: "",
      images: "/servadat/corporates.png",
      links: "/services#Corporations",
    },
    {
      id: 4,
      name1: "  To Regulators ",
      name2: "",
      images: "/servadat/regulators.png",
      links: "/services#Regulators",
    },
  ];

  const div1Variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const div2Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const div3Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const div4Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const div5Variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const div6Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  // const strings = [
  //   " Air Pollution",
  //   " Toxic emissions",
  //   " Soil Contamination",
  //   "Water Pollution",
  //   "Public Health Risks",
  //   " All these hazards have a common source. <br /> Burning reject waste in the open.",
  //   " You can change this.",
  //   " Scroll down to know more",
  // ];

  // const delay = 60;
  // const pauseFor = 2000;
  // const transition = { duration: 1, delay: 1 };

  return (
    <main>
      <BackgroundImage image="/aerial-view-city-fog1.jpg" />
      <section
        className=" md:h-[1190px] relative block md:hidden  -top-32 h-[950px] w-full bg-black  "
        style={{
          backgroundImage: `url(${"/aerial-view-city-fog1.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="md:container   md:mx-auto flex md:pt-0 pt-[100%] md:h-fit lg:h-full md:justify-center  items-center pt-">
          <div className="text-black  md:w-[70%] w-[100%]   text-center   md:h-fit leading-none flex flex-col gap-5 text-2xl md:text-2xl font-openSans">
            <div className=" text-white min-h-[360px] text-2xl">
              <div class="animate-slide-in-down-delay">
                Air Pollution, Toxic emissions, Soil Contamination,
              </div>

              <div class="animate-slide-in-down-delay">
                Water Pollution, Public Health Risks.
              </div>
              <br />
              <div class="animate-slide-in-down-delay-2">
                All these hazards have a common source.
              </div>

              <div class="animate-slide-in-down-delay-2">
                Burning reject waste in the open.
              </div>
              <br />
              <div class="animate-slide-in-down-delay-3">
                You can change this.
              </div>

              <div class="animate-slide-in-down-delay-3">
                Scroll down to know more.
              </div>

              {/* <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 10,
                  deleteSpeed: -10,
                  pauseFor: 2000,
                }}
                onInit={(typewriter) => {
                  typewriter

                    .typeString("Air Pollution, ")

                    .callFunction(() => {
                      console.log("String typed out!");
                    })

                    .typeString("Toxic emissions, ")
                    .callFunction(() => {
                      console.log("All strings were deleted");
                    })

                    .typeString("Soil Contamination, <br/>")
                    .callFunction(() => {
                      console.log("All strings were deleted");
                    })

                    .typeString("Water Pollution,  ")
                    .callFunction(() => {
                      console.log("All strings were deleted");
                    })

                    .typeString("Public Health Risks. <br/> <br/> ")
                    .callFunction(() => {
                      console.log("All strings were deleted");
                    })

                    .typeString(
                      "All these hazards have a common source. <br/> "
                    )
                    .callFunction(() => {
                      console.log("All strings were deleted");
                    })

                    .typeString("Burning reject waste in the open.<br/> <br/>")
                    .callFunction(() => {
                      console.log("All strings were deleted");
                    })

                    .typeString("You can change this. <br/> ")
                    .callFunction(() => {
                      console.log("All strings were deleted");
                    })

                    .typeString("Scroll down to know more. <br/>")
                    .callFunction(() => {
                      console.log("All strings were deleted");
                    })

                    .pauseFor(3000)
                    .start();
                  <BsChevronDown color="black" size={70} />;
                }}
              /> */}
            </div>
          </div>
        </div>
      </section>

      <section className="flex relative -top-16 pb-8 justify-center w-full">
        <SectionOne />
      </section>

      <section className=" bg-coustom1  w-full">
        <p className="pb-12 pt-16 text-2xl text-center   w-full text-black lg:text-4xl">
          What is Reject Waste?
        </p>
        <div className="flex pb-12 justify-center">
          <SectionTwo />
        </div>
      </section>
      <section className="flex  justify-center w-full">
        <SectionThree />
      </section>

      <section className="flex bg-coustom1 justify-center w-full">
        <SectionFour />
      </section>

      <section>
        <Whyworkwithus />
      </section>

      <Clients />

      {/* <section>
        <Testimonials />
      </section> */}
    </main>
  );
}
