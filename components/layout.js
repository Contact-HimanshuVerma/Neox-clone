import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { set } from "react-hook-form";

export default function Layout({ children }) {
  const route = useRouter();
  const [view, setView] = useState(false);
  const { pathname } = useRouter();
  const [navbr, setNavbr] = useState(false);

  const [AboutNav, setAboutNav] = useState(false);
  const [ServiceNav, SetServiceNav] = useState(false);
  const [CapabilitiesNav, setCapabilitiesNav] = useState(false);
  const [subCategory, setSubCategory] = useState(false);
  const [productsub, setProductsub] = useState(false);
  const [serVicePathSetting, setSerVicePathSetting] = useState("");

  const mouseEnteringService = (path) => {
    setSerVicePathSetting(path);
    console.log(path);

    setProductsub(false);
  };
  const ServiceCategoryVisible = () => {
    setSubCategory((prev) => !prev);
  };
  const subcategoryVisible = () => {
    setSubCategory((prev) => !prev);
  };
  const setViewClick = () => {
    setView((prev) => !prev);
    setAboutNav(false);
    setCapabilitiesNav(false);
    SetServiceNav(false);
  };
  const SubLinksClick = () => {
    setView((prev) => !prev);
    setAboutNav(false);
    setCapabilitiesNav(false);
    SetServiceNav(false);
  };
  const ClickOnAbout = () => {
    setAboutNav((prev) => !prev);
    setCapabilitiesNav(false);
    SetServiceNav(false);
  };
  const ClickOnService = () => {
    SetServiceNav((prev) => !prev);
    setCapabilitiesNav(false);
    setAboutNav(false);
  };
  const ClickCapabilities = () => {
    setCapabilitiesNav((prev) => !prev);
    SetServiceNav(false);
    setAboutNav(false);
  };

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbr(true);
    } else {
      setNavbr(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });
  const menu = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
      sub: [
        { name: "About  ", path: "/about" },

        { name: "Our Mission", path: "/about#OURMISSION" },
        { name: "Meet the Team", path: "/about#meettheteam" },
      ],
    },

    {
      name: "Products",
      path: "/products",
      sub: [
        {
          name: "Neo-X",
          path: "/products",
          inside: [
            { name: "Overview ", path: "/products#Overview" },

            {
              name: "Technology",
              path: "/products#Technology",
            },
            { name: "Benefits", path: "/products#Benefits" },
          ],
        },
      ],
    },

    // {
    //   name: "Gallery",
    //   path: "/gallery",
    //   // sub: [
    //   //   { name: "Overview ", path: "/services#AuditingFirms" },

    //   //   {
    //   //     name: "Technology",
    //   //     path: "/services#CharteredAccount",
    //   //   },
    //   //   { name: "Benefits", path: "/services#Corporations" },
    //   // ],
    // },

    // {
    //   name: "Blogs",
    //   path: "/blogs",
    //   // sub: [
    //   //   { name: "Videos", path: "/resources#Videos" },
    //   //   { name: "Blogs", path: "/resources#Blogs" },
    //   //   { name: "News", path: "/resources#News" },
    //   // ],
    // },

    {
      name: "FAQS",
      path: "/faq",
    },

    {
      name: "Contact",
      path: "/contact",
    },
  ];

  function click() {
    if (pathname === "/about") {
      setAbout(true);
    } else {
      setAbout(false);
    }
    if (pathname === "/solutions") {
      setSoultion(true);
    } else {
      setSoultion(false);
    }
    if (pathname === "/capabilities") {
      setCapablitily(true);
    } else {
      setCapablitily(false);
    }
  }
  const [selectedItem, setSelectedItem] = useState(null); // State to store the selected item

  const handleItemHover = (index) => {
    setSelectedItem(index); // Update the selected item index on hover
  };
  const handleMouseLeave = () => {
    setSelectedItem(null); // Reset selected item to null when mouse hovers out
  };
  return (
    <>
      <Head>
        <title>{`Neo San Private Limited`}</title>
      </Head>
      <div className="w-full lg:h-[82px]">
        <header
          className={`w-full ${
            navbr
              ? "md:fixed bg-white z-50 w-full border flex justify-center ease-in font-openSans  duration-0 border-zinc-100 border-b"
              : "w-full  font-openSans bg-glass flex justify-center  ease-in duration-700 "
          }`}
        >
          <Link cla href="/">
            <a className="flex z-[20000]  ml-16 justify-between   lg:justify-start items-center ">
              <div className="w-full h-[80px]">
                <div className=" md:mt-1 mt-4 relative  w-fit  h-fit md:flex items-center flex-col">
                  <img
                    src="/logo.png"
                    alt="logo"
                    className="md:w-[109.08px] object-contain  w-[286px] h-[52px] md:h-[72px]"
                  />
                </div>
              </div>
            </a>
          </Link>
          <div className="lg:basis-[90%] flex z-[20000]   justify-center  items-center text-zinc-900 font-sans">
            <nav className="justify-   items-center md:gap-[2px] 2xl:gap-2 hidden mr-2 text-sm tracking-tight uppercase font-OpenSans lg:flex">
              {menu.map(({ name, path, sub }, index) => {
                if (name === "Products") {
                  return (
                    <div
                      key={index}
                      onMouseEnter={() => setProductsub(true)}
                      className={`group  h-full min-h-[50px] flex justify-center items-center cursor-pointer relative  ${
                        !navbr && pathname === "/" ? "text-black" : "text-black"
                      }`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.1, ease: "linear" }}
                        whileTap={{ scale: 0.95 }}
                        onMouseLeave={handleMouseLeave}
                        className={` ${
                          pathname === serVicePathSetting &&
                          "underline decoration-blue decoration-2 font-bold underline-offset-4"
                        } mx-1 2xl:mx-1l`}
                      >
                        <span
                          className={`${
                            pathname === path
                              ? ""
                              : "bg-left-bottom text-sm font-bah pb-1 bg-gradient-to-r from-blue to-blue bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-700 ease-out"
                          }`}
                        >
                          {name}
                        </span>
                      </motion.div>

                      {sub && productsub && (
                        <div className="absolute z-50  flex-col invisible w-auto text-black transition-all bg-transparent top-14 left-4 group-hover:visible">
                          {/* <div className="w-0 mt-10 ml-6 h-0 border-l-[10px] border-l-transparent border-b-[25px] border-b-white border-r-[10px] border-r-transparent"></div> */}
                          <div className="w-auto bg-white rounded-lg">
                            <div className="w-full  rounded-lg shadow-md">
                              {sub.map(({ name, path, inside }, index) => (
                                <div
                                  key={index}
                                  onClick={() => mouseEnteringService(path)}
                                  className="relative inline-flex cursor-pointer group"
                                >
                                  <Link href={path}>
                                    <div
                                      className="inline-flex p-2  overflow-hidden text-sm normal-case w-72 hover:font-bold whitespace-nowrap  "
                                      onMouseEnter={() =>
                                        handleItemHover(index)
                                      }
                                    >
                                      {name}
                                    </div>
                                  </Link>
                                  {selectedItem === index && (
                                    <div
                                      onMouseLeave={handleMouseLeave}
                                      className="absolute top-0 left-[102%]  bg-white rounded-lg  shadow-md "
                                    >
                                      {sub[selectedItem].inside.map(
                                        (item, itemIndex) => (
                                          <a
                                            rel="noopener noreferrer"
                                            key={itemIndex}
                                            href={item.path}
                                            onClick={() => setProductsub(false)}
                                          >
                                            <div
                                              className="inline-flex p-2 px-4 overflow-hidden text-sm normal-case w-72 hover:font-bold whitespace-nowrap "
                                              key={itemIndex}
                                            >
                                              {item.name}
                                            </div>
                                          </a>
                                        )
                                      )}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={index}
                      onMouseEnter={() => setSubCategory(true)}
                      className={`group h-full min-h-[50px] flex justify-center items-center   cursor-pointer relative ${
                        !navbr && pathname === "/" ? "text-black" : "text-black"
                      }`}
                    >
                      <Link href={path}>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.1, ease: "linear" }}
                          whileTap={{ scale: 0.95 }}
                          className={` h-full min-h-28 ${
                            pathname === path &&
                            "underline decoration-blue decoration-2 w-fit font-bold  underline-offset-4"
                          } mx-2 2xl:mx-4 font-OpenSans `}
                        >
                          <span
                            className={`${
                              pathname === path
                                ? ""
                                : "bg-left-bottom  text-sm font-bah pb-1 bg-gradient-to-r from-blue to-blue bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-700 ease-out"
                            }`}
                          >
                            {name}
                          </span>
                        </motion.div>
                      </Link>

                      {sub && subCategory && (
                        <div className="absolute z-50 flex-col invisible w-auto text-black transition-all bg-transparent hover:rounded-lg top-12 left-4  group-hover:visible">
                          <div className="w-auto bg-white rounded-lg">
                            <div className="w-full rounded-lg shadow-md">
                              {sub.map(({ name, path, inside }, index) => (
                                <div
                                  key={index}
                                  className="relative inline-flex cursor-pointer group"
                                  onClick={subcategoryVisible}
                                >
                                  <a
                                    to={path}
                                    rel="noopener noreferrer"
                                    href={path}
                                  >
                                    <div className="inline-flex w-64 p-2 px-4 overflow-hidden text-sm normal-case font-OpenSans hover:font-bold whitespace-nowrap ">
                                      {name}
                                    </div>
                                  </a>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }
              })}
            </nav>

            <nav className=" lg:hidden mr-2 p-2 relative group  flex justify-end ">
              <svg
                onClick={() => {
                  setView((prev) => !prev);
                }}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              {view && (
                <div className="bg-transparent w-auto absolute top-6 -right-2 flex-col z-50 rounded-sm transition-all">
                  <div className="pt-4 w-auto">
                    {menu.map(({ name, path, sub }, index) => (
                      <div
                        key={index}
                        tabIndex={1}
                        className="w-40 group top-4 px-4 bg-white relative inline-flex p-2 normal-case text-sm whitespace-nowrap border-b border-t border-zinc-100 "
                      >
                        {sub ? (
                          name
                        ) : (
                          <Link href={path}>
                            <div
                              className=" w-full"
                              onClick={() => {
                                setView(false);
                              }}
                            >
                              <a>{name}</a>
                            </div>
                          </Link>
                        )}
                        <div className="bg-white right-[102%]  group-focus:visible invisible  shadow-md absolute z-[1000] flex flex-col">
                          {sub?.map(({ name, path }, index) => (
                            <div
                              onClick={() => {
                                setView((prev) => !prev);
                              }}
                              key={index}
                              className="text-center border border-b border-zinc-100 text-sm  px-4 py-2"
                            >
                              <Link href={path}>
                                <div className="">{name}</div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </nav>
          </div>
          <Link href={"/contact"}>
            <div className="z-[20000] flex item-center cursor-pointer  justify-center mt-3 h-full px-8 w-[20%]">
              <button className="bg-blue text-white px-3 py-2 rounded-md ">
                Book A Demo
              </button>
            </div>
          </Link>
        </header>
      </div>

      <main
        className="text-zinc-900 font-sans  "
        onClick={() => {
          setView(false);
        }}
      >
        {children}
      </main>

      <footer className="border font-openSans bg-white border-t mx-auto  py-6 lg:py-7">
        <div className="grid grid-cols-2 mb-8 lg:flex lg:flex-row justify-around items-start">
          <div className="col-span-2 pb-4 md:pb-0 ">
            <Link href="/">
              <a className="flex flex-col justify-start items-center pl-6 lg:pl-0">
                <div className=" bg-white">
                  <img
                    src="/logo.png"
                    alt="logo"
                    className="md:w-[145.79px] object-contain  w-[286px] h-[52px] md:h-[92px]"
                  />
                </div>
                <div className="pl-2 flex flex-col justify-center">
                  {/* <span className="leading-4 font-openSans text-black text-xl">
                    
                  </span> */}
                </div>
              </a>
            </Link>
          </div>

          <div className="text-sm p-4 lg:p-0 pl-6  text-black font-openSans text-left">
            {/* <p className="font-semibold">CONTACT</p> */}

            <p>Neo San Private Limited</p>
            <p>NO 97, 2ND STAGE INDUSTRIAL SUBRB TNMKUR ROAD,</p>
            <p>BENGALURU, Bengaluru (Bangalore) Urban</p>
            <p>Karnataka, 560022</p>
          </div>

          <div className="text-sm p-4 lg:p-0 pl-6  text-black font-openSans text-left">
            {/* <p className="font-semibold">CONTACT</p> */}

            <p className="">Phone : +919148297040</p>
            <p className="">Email : info@neosanitation.net</p>
          </div>

          <div className="text-sm flex flex-col font-openSans text-black  pl-6 lg:p-0   text-left ">
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/Products">
              <a>Products</a>
            </Link>
            {/* <Link href="/gallery">
              <a> Gallery</a>
            </Link> */}
          </div>

          <div className="text-sm flex flex-col font-openSans text-black lg:p-0  text-left">
            {/* <Link href="/blogs">
              <a>Blogs</a>
            </Link> */}

            <Link href="/faq">
              <a> FAQs</a>
            </Link>
            <Link href="/contact">
              <a>Contact </a>
            </Link>
          </div>

          <div className=" md:w-fit w-full  lg:p-0 pl-6 mr-6 mb-2 ">
            <p className="font-semibold md:mt-0 mt-5 text-sm pb-2 font-openSans  text-black text-center md:text-center">
              FIND US ON
            </p>
            <div className="md:mt-0 mt-5 grid-cols-2 gap-2 flex justify-center lg:inline-grid  ">
              <a
                className="hover:scale-105 transition-all"
                href="/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/icons/linkidin.gif" className="w-8 h-8" alt="" />
              </a>
              <a
                className="hover:scale-105 transition-all"
                href="/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/icons/twitter.gif" className="w-8 h-8" alt="" />
              </a>

              <a
                className="hover:scale-105 transition-all"
                href="/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/icons/instagram.gif" className="w-8 h-8" alt="" />
              </a>
              <a
                className="hover:scale-105 transition-all"
                href="/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/icons/youtube.gif" className="w-8 h-8" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto  text-center font-openSans  text-sm text-zinc-400 pt-4 lg:pt-0 lg:p-0 p-4 pl-6">
          <p> Neo San Private Limited </p>
          <p>
            Copyright © 2022. All Rights Reserved. Designed by Deedbee Social
            Ventures.
          </p>
          <p> {`Image credits | freepik.com`}</p>
        </div>
      </footer>
    </>
  );
}
