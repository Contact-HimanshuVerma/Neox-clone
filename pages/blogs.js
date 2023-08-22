import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Blogs() {
  const blog = [
    {
      id: 1,
      name: "   Delivering Exceptional Customer Support: Unleashing the Power of Agent Response Entitlement in Salesforce",
      logo: "/services/cap7.jpg",
      desc: "Many organizations are struggling with the digital transformation efforts that they have begun,” says David Rogers, author of The Digital Transformation... ",
      link: "/blog/UnleashingthePower",
      auth: "Gorden haff",
      sorc: "enterprisersproject.com",
    },
    {
      id: 2,
      name: "Unleashing the Power of Salesforce B2B Commerce Cloud for Seamless B2B E-commerce      ",
      logo: "/services/commerse.jpeg",
      desc: "  In today's digital age, businesses are increasingly turning to e-commerce to expand their reach and drive growth. For B2B organizations, the challenges  .........",
      link: "/blog/B2BCommerce",
      auth: "Augusta Henning",
      sorc: "smartrecruiters.com",
    },
    {
      id: 3,
      name: "Salesforce Data Cloud: Unlocking the Power of Data for Business Success",
      logo: "/services/cap5.jpg",
      desc: " In today's data-driven business landscape, having access to accurate and comprehensive data is crucial for making informed decisions and driving successful   ........",
      link: "/blog/UnlockingthePower",
      auth: "Ait News desk",
      sorc: "aithority.com",
    },
    {
      id: 4,
      name: "  Einstein GPT: Transforming Customer Interactions with AI-powered Language Generation      ",
      logo: "/blog/ein.jpg",
      desc: "  In the era of digital transformation, businesses are constantly seeking innovative ways to enhance customer interactions and deliver personalized experiences.............  ",
      link: "/blog/EinsteinGPT",
      auth: "Manav Seth",
      sorc: "peoplematters.in",
    },
    {
      id: 5,
      name: " HubSpot vs Salesforce CRM: A Comprehensive Comparison",
      logo: "/services/cap3.jpg",
      desc: " In today's digital era, customer relationship management (CRM) software has become essential for businesses to streamline their sales, marketing.........",
      link: "/blog/HubSpotvsSalesforce  ",
      auth: "Abby fry",
      sorc: "moodle.com",
    },
    {
      id: 6,
      name: "Zoho vs Salesforce CRM: A Comprehensive Comparison      ",
      logo: "/services/cap3.jpg",
      desc: " When it comes to customer relationship management (CRM) software, Zoho CRM and Salesforce CRM are two prominent contenders in the market.........",
      link: "/blog/zohovssaleforce",
      auth: "Deloitte professionals",
      sorc: "deloitte.com",
    },
  ];

  return (
    <>
      <Head>
        <title>Neo San | Blogs</title>
        <meta name="description" content="" />
      </Head>

      <section className="text-black           font-OpenSans bg-coustom1 body-font">
        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-col flex-wrap text-center w-full mb-20 ">
            <h1 className="text-4xl  title-font mb-4 text-black">Blogs</h1>
          </div>
          <div className="flex hover:cursor-pointer lg:grid md:grid md:grid-cols-3 lg:grid-cols-4 flex-wrap gap-5 ">
            {blog.map(({ name, logo, id, desc, link, auth, sorc }) => {
              return (
                <Link key={id} href={"/"}>
                  <div
                    key={id}
                    className="w-fit bg-white    flex shadow-md flex-col lg:flex-1  justify-between bg-opacity-75   rounded-lg overflow-hidden text-center relative"
                  >
                    <div>
                      <img
                        className=" flex-shrink-0  object-cover xl:w-[100%] xl:h-[300px]"
                        src={"/gallery/8.jpg"}
                        alt=""
                      />
                      <div className="px-4">
                        <h1 className="title-font mt-3 sm:text-lg text-xl text-justify text-black mb-3">
                          Neo San Private Limited
                        </h1>
                        {/* <p className="text-left">Source : {sorc}</p>
                      <p className="text-left">Author : {auth}</p> */}
                        {/* <p className="leading-relaxed mt-2 text-left ">{desc}</p> */}
                      </div>
                    </div>
                    {/* <div className="flex justify-center mb-6 ">
                    <Link href={link}>
                      <p className="text-black border-2 border-white  hover:border-2 p-2 font-bold  duration-300 rounded-md  hover:text-white hover:bg-blue  flex justify-center items-center text-left hover:cursor-pointer">
                        Read More
                      </p>
                    </Link>
                  </div> */}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
