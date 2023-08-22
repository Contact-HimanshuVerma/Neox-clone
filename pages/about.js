import Head from "next/head";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
export default function About() {
  const [buttonIndex, setButtonIndex] = useState(0);
  const buttonClick = (x) => {
    setButtonIndex(x);
  };
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
      text: "NFRA has concluded in this AQRR that the appointment of BSR as the statutory auditors of IFIN was ab initio illegal and void, & the release said. Further, NFRA found that the IT processes/platform used by BSR have deficiencies that are systemic and structural in nature.",
    },
    {
      id: 2,
      title: "The expectation of joint audits ",
      text: "Corporates that need joint audits and their current sole auditors will expect the other audit firm to meet audit quality expectations and carry the necessary expertise to perform large audits. Not withstanding whether joint audits are mandatory or not, the policies and guidance provided by  are aimed at enhancing the quality of audits by audit firms. The audit quality policies and procedures that will be laid out by  and the audit guidance and the Audit Documentation and Archival Tool (ADAT) that is being developed by  is scalable for large audit requirements.",
    },
    {
      id: 3,
      title: "Unify a divergent practice ",
      text: "Most of the audit firms in India are highly diverse, with fragmented professional practices.  aims to build capacity and enhance the capabilities of audit firms by providing a common platform for audit quality, best practices and policies, technical guidance, documentation tools and access to audit specialists, so that the audit firms can network and collaborate for their collective success and growth, delivering high quality audit services.",
    },
  ];
  const discover = [
    {
      name: "Team",
      para: "The services offered by  will be provided by a team of nine (and growing) experienced, young and energetic chartered accountants having individual experiences ranging from 10 to 28 years, with a cumulative experience of more than 175 years in auditing, accounting and advisory and having served a diverse set of industries. Each member has held senior professional positions, some including as Partners and Executive Directors, in one of India’s largest audit firms including participating in that firm’s technical, quality and learning teams.",
      img: "/discover/discover1.png",
      desc: "From Ashtanga to Vinyasa, make mindful movement a daily ritual.",
      blogsdata: [
        {
          category: "partners",
          designation: " Managing Partner and CEO",
          name: "Balaji V",
          image: "/team/balaji.jpg",
          linkd: "https://www.linkedin.com/in/balaji-v-8501707",
          role: "Founder and Managing Partner",
          email: "vbalaji@neox.pro",
          detailsLink: "/partners/balaji",
          description:
            "Balaji V. brings over 28 years’ experience in financial accounting and auditing, working across various industries, including, agriculture, automobile, healthcare, information  technology, information technology enabled services, manufacturing, real estate, retail and infrastructure. Over the course of his professional career, he has held leadership positions in one of  India’s largest audit firms in roles spanning Audit Inspections, Audit Risk, Audit Quality  and Regulatory.  Balaji has been a member of the Audit and Assurance Standards Board, the Expert Advisory Committee and the Ind AS Transition Facilitation Group of the Institute of Chartered Accountants of India (ICAI). He has also been a member of various study groups constituted by the ICAI to evaluate and address issues considered for amendments by the ICAI. Balaji has co-authored various publications of the ICAI including the ‘Guidance Note on Audit of Internal Financial Controls over Financial Reporting’ and the ‘Guidance Note on  Reporting on Fraud’ under sections 143(3)(i) and 143(12), respectively, of the Companies Act, 2013; ‘Technical Guidance on Reporting under Rule 11(e) and 11(f) of the Companies (Audit and Auditors) Rules’; among others.",
        },
        {
          category: "partners",
          name: "Brindasri K",
          designation: " Lead - Technology Initiatives",
          image: "/team/brindasri.jpg",
          role: "Partner",
          linkd: "https://www.linkedin.com/in/brindasri-krishnamurthy-3a7a77a9",
          email: "brindasrik@neox.pro",
          detailsLink: "/partners/Brindasri",
          description:
            "Brindasri K. comes with over 27 years of professional experience in the information technology services sector and has worked with India’s largest IT company. Her area of expertise includes sales and delivery in the banking and financial services industry, professional services and life sciences. Brindasri has also worked with one of the largest multinational audit firms where her role involved automating operations.",
        },

        {
          category: "partners",
          name: "Alpa Sheth",
          designation: "Lead - Monitoring and EQCR",
          image: "/team/alpa.JPG",
          linkd: "https://www.linkedin.com/in/alpa-chitalia-sheth-106536268/",
          role: "",
          description: "",
          email: "alpa@neox.pro",
          detailsLink: "/partners/alpa",
        },
        {
          category: "partners",
          name: "Jaideep S Trasi",
          designation: "Lead - Training",
          image: "/team/jaideep.png",
          linkd: "https://www.linkedin.com/in/jaideep-t-383a81b/",
          role: "",
          description: "",
          email: "jtrasi@neox.pro",
          detailsLink: "/partners/jaideep",
        },
      ],
      blogsdatafull: [],
    },
    {
      name: "Advisory Boards",
      img: "/discover/discover2.jpg",

      desc: "From Ashtanga to Vinyasa, make mindful movement a daily ritual.",
      blogsdata: [
        {
          para: " has constituted two advisory boards to advise the firm on:",
          para2:
            "✔️ Strategy to evolve  as a reputed firm in the financial reporting ecosystem; and",
          para3:
            "✔️ Technical matters related to financial accounting and auditing",
          para4:
            "The vision, policies, practices and guidance of  have been critically reviewed and approved by our Advisory Boards whose members are eminent Audit & Finance professionals.",
          name: "STRATEGIC ADVISORY BOARD (SAB)",
          point1:
            "1. Advice on the Vision and Mission statements of  and evaluate compliance with the same.",
          point2: "2. Evaluate and advice on:",
          point1sub:
            "a. The business model (including the planned scope of services) and the pricing plan for services that are intended to be offered by .",
          point1sub2: "b. Investment decisions, including in talent",
          point1sub3:
            "c. Geographies and markets which can be addressed for the services offered by  and the manner of accessing such geographies/markets.",
          point1sub4:
            "d. Potential new areas of focus for  in the financial reporting eco-system.",
          point1sub5:
            "e. Stakeholder expectations and  response to address them.",
          point3:
            "3. Enable outreach/ represent the views of  on regulatory matters with the Regulators, including communicating best practices which can be translated into law/r regulations.",
          point4:
            "4. Recommend steps for “” being recognized as the premier respected brand in its niche in the financial reporting eco-system.",
        },
        {
          name: "TECHNICAL ADVISORY BOARD (TAB)",
          image: "/default.jpeg",
          role: "CEO",
          description:
            "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
          point1:
            "1. Review and approve (with suitable modifications, if required) the proposed audit quality policies, principles, procedures, guidance, and tools considering the principles/provisions laid down in the applicable professional standards, the relevant regulatory requirements, GAAP and GAAS and suggest other areas where the quality services of  can be enhanced.",
          point2:
            "2. Review and approve (with suitable modifications, if required) the recommendations and suggestions that  would like to make to the Regulators.",
          point3:
            "3. Advise  on financial accounting and auditing matters that are brought to the notice of this Board.",
          point4:
            "4. Get updates from  in the financial reporting eco-system and stakeholder expectations and  response in updating the audit quality policies, principles, guidance, and tools for such developments.",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Neo San Private Limited</title>
        <meta name="description" content=" " />
      </Head>

      <section className="">
        <section className=" bg-blue  py-11 w-full  h-fit  lg:py-14">
          <h2 className="text-3xl text-white font-openSans text-center  title-font ck   mb-4">
            About
          </h2>

          <div className="flex justify-center">
            {" "}
            <div className=" mb-12 basis-[90%]">
              <p className="leading-loose md:p-0 p-4  text-justify  font-openSans text-white ">
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellat incidunt soluta sint aliquam, eligendi similique amet
                error consequuntur et saepe nesciunt sapiente ad cupiditate
                magnam ut! Ipsa nemo corrupti voluptas explicabo aspernatur
                inventore odio debitis minima perferendis impedit repudiandae
                quas neque modi cumque itaque, accusamus quae omnis? Quae,
                repellendus perspiciatis? Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Repellat incidunt soluta sint
                aliquam, eligendi similique amet error consequuntur et saepe
                nesciunt sapiente ad cupiditate magnam ut! Ipsa nemo corrupti
                voluptas explicabo aspernatur inventore odio debitis minima
                perferendis impedit repudiandae quas neque modi cumque itaque,
                accusamus quae omnis? Quae, repellendus perspiciatis? Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Repellat
                incidunt soluta sint aliquam, eligendi similique amet error
                consequuntur et saepe nesciunt sapiente ad cupiditate magnam ut!
                Ipsa nemo corrupti voluptas explicabo aspernatur inventore odio
                debitis minima perferendis impedit repudiandae quas neque modi
                cumque itaque, accusamus quae omnis? Quae, repellendus
                perspiciatis?
              </p>
            </div>
          </div>
        </section>
        <div
          className="w-full bg-white block h-[10px] md:h-[80px] lg:col-span-2  col-span-1 "
          id="OURMISSION"
        ></div>

        <div className="flex justify-center">
          <div className="w-[100%] basis-[90%]  items-center">
            <div>
              <p className="text-3xl text-center pb-8">Our Mission</p>
            </div>
            <div className="text-lg text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              incidunt soluta sint aliquam, eligendi similique amet error
              consequuntur et saepe nesciunt sapiente ad cupiditate magnam ut!
              Ipsa nemo corrupti voluptas explicabo aspernatur inventore odio
              debitis minima perferendis impedit repudiandae quas neque modi
              cumque itaque, accusamus quae omnis? Quae, repellendus
              perspiciatis?
            </div>
          </div>
        </div>
        <div
          className="w-full bg-white block h-[10px] md:h-[80px] lg:col-span-2  col-span-1 "
          id="meettheteam"
        ></div>
        <section className="bg-coustom1 ">
          <h2 className="text-3xl font-openSans  title-font text-black text-center pt-10 md:pt-20 pb-2">
            Meet The Team
          </h2>
        </section>
        <section className="bg-coustom1 md:pt-1 md:pb-10">
          <div className="md:container px-6 mb-10  md:mx-auto">
            <div
              className={`${
                buttonIndex === 1
                  ? "grid grid-cols-1 gap-8 md:mt-8  xl:mt-16 md:grid-cols-2 xl:grid-cols-2"
                  : "grid grid-cols-1 gap-8 md:mt-8  xl:mt-16 md:grid-cols-2  xl:grid-cols-2"
              }`}
            >
              {discover[buttonIndex].blogsdata.map(
                (
                  {
                    name,
                    image,
                    role,
                    description,
                    id,
                    para,
                    point1,
                    point2,
                    point3,
                    point1sub4,
                    point4,
                    point1sub,
                    point1sub2,
                    point1sub3,
                    point1sub5,
                    linkd,
                    category,
                    email,
                    detailsLink,
                    designation,
                  },
                  index
                ) => {
                  //partner category list

                  return (
                    <div
                      key={index}
                      data-aos="fade-up"
                      data-aos-once="true"
                      className="flex flex-col items-center p-5"
                    >
                      <div className="relative  lg:w-[250px] lg:h-[250px]  md:w-[200px] md:h-[200px] w-[200px]  h-[200px]  rounded-full">
                        <Image
                          className="rounded-full"
                          alt="profle"
                          src={"/person.jpg"}
                          objectFit="cover"
                          layout="fill"
                        />
                      </div>
                      <div className="mt-8  w-full flex justify-center gap-4 text-xl font-openSans   text-black  font-bold ">
                        <p className="font-openSans  font-bold mt-2">
                          John Duo
                        </p>
                        <span className="hover:scale-105 transition-all">
                          <a
                            className="hover:scale-105 transition-all"
                            href={"/about"}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              src="/icons/link.png"
                              className="w-10 h-10"
                              alt=""
                            />
                          </a>
                        </span>
                      </div>

                      <h1 className="md:w-[255px] h-[2px]  bg-blue mb-5"></h1>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
