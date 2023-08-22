import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { RiCheckboxCircleFill } from "react-icons/ri";
const Whyworkwithus = () => {
  const discover = [
    {
      name: "Lesser Health Hazards",
      name2: " ",
      data: [
        {
          description:
            " Dispose reject waste at source instead of burning it in a landfill which causes air, water, and soil contamination           ",
        },
      ],
    },
    {
      name: "Decentralized infrastructure",
      name2: "  ",
      data: [
        {
          description:
            "Reduce dependency on centralized incineration plants which need a lot of space, investment and public resources.            ",
        },
      ],
    },
    {
      name: "Cost Savings",
      name2: "",
      data: [
        {
          description:
            "Reduce waste management costs on manpower, electricity, transportation by disposing reject waste at source.",
        },
      ],
    },
    {
      name: "Reduced Emissions",
      name2: " ",
      data: [
        {
          description:
            " Contribute towards bringing down greenhouse gas emissions which results in cleaner air and reduce global warming.",
        },
      ],
    },
  ];
  const [buttonIndex, setButtonIndex] = useState(0);
  const buttonClick = (x) => {
    setActiveIndex(0);
    setButtonIndex(x);
  };
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = buttonIndex + 1 < discover.length ? buttonIndex + 1 : 0;
      setButtonIndex(newIndex);
    }, 3000); // Change index every 2 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [buttonIndex, discover.length]);

  return (
    <>
      <section
        className="text-white font-OpenSans  body-font min-h-[700px] pt-8 pb-4 lg:pt-12 lg:pb-12"
        style={{
          backgroundImage: `url(${"/wwus.jpg"})`,
          backgroundSize: "cover",
          objectFit: "fit",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {" "}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="md:container pt-16  font-openSans md:mx-auto"
        >
          <div className="flex w-full gap-4 pt-10  md:pt-0 justify-center ">
            {/* <span className="inline-block w-20 h-[2px] mt-5 rounded-full bg-white"></span> */}
            <h1 className="text-3xl  text-center text-white lg:text-4xl">
              Outcomes
            </h1>
            {/* <span className="inline-block w-20 h-[2px] rounded-full mt-5 bg-white"></span> */}
          </div>
          <div className="flex  justify-center mt-6 mb-5 ">
            <ul className="grid  grid-cols-2  md:gap-y-0 gap-y-10 md:grid-cols-4 md:gap-14 w-full  md:w-[100%]  mt-5 text-center   text-white   p-1">
              {discover.map(({ name, name2 }, index) => {
                return (
                  <div
                    key={index}
                    className="w-full  "
                    onClick={() => {
                      buttonClick(index);
                    }}
                  >
                    <div className="flex    md:min-w-[200px] justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-[80px] h-[80px] rounded-full${
                          index === buttonIndex
                            ? " text-green  text-2xl          font-OpenSans "
                            : ""
                        } flex justify-center text-xl            font-OpenSans  title-font  text-white   mb-4 hover:cursor-pointer`}
                      >
                        <div className="flex items-center justify-center w-full">
                          <RiCheckboxCircleFill
                            size={60}
                            color={`${
                              index === buttonIndex ? "#48bf91" : "white"
                            }`}
                          />
                        </div>
                      </motion.div>
                    </div>
                    <div
                      className={`text-sm md:text-xl md:min-w-[200px]   text-center ${
                        index === buttonIndex ? " " : " "
                      }`}
                    >
                      {name}
                      <br />
                      {name2}
                    </div>
                    <div
                      className={`transition-transform  md:min-w-[200px]  flex justify-center -translate-y-0 ease-in-out duration-1000  ${
                        index === buttonIndex
                          ? "flex   -translate-y-0"
                          : "-translate-y-10 hidden "
                      }`}
                    >
                      <AiFillCaretDown color="#48bf91" />
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>

          {discover[buttonIndex].data.map(({ description }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: activeIndex === index ? 1 : 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center"
            >
              <p className="p-5  md:text-xl text-center text-white font-OpenSans lg:pt-9 md:w-[65%] brightness-200">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Whyworkwithus;
