import React from "react";

function SectionFour() {
  return (
    <div className=" flex-wrap flex justify-between  md:flex-row flex-col md:gap-0 gap-8 py-10 md:py-20 md:px-0 px-4 md:basis-[90%]  ">
      <div className="w-full text-center pb-14 text-2xl lg:text-4xl  ">
        Key Features
      </div>
      <div className="md:w-[25%] flex flex-col  ">
        <div data-aos="flip-down" className=" flex justify-center">
          <div className=" rounded-full">
            <img
              src="/feature/1.jpg"
              className="w-[250px] h-[250px] rounded-full"
              alt=""
            />
          </div>
        </div>

        <div className="text-center pt-6 px-8">
          <p className="text-xl font-semibold pb-4 "> Easy Setup</p>
          <p className="text-lg">
            Install anywhere waste is generated - homes, offices, schools,
            public spaces, airports, factories, etc. It operates automatically,
            making waste disposal hassle-free.
          </p>
        </div>
      </div>
      <div className="md:w-[25%]">
        <div data-aos="flip-down" className=" flex justify-center ">
          <div className="flex justify-center rounded-full">
            <img
              src="/feature/1.jpg"
              className="w-[250px] h-[250px] rounded-full"
              alt=""
            />
          </div>
        </div>
        <div className="text-center pt-6 px-8">
          <p className="text-xl font-semibold pb-4"> Energy-efficient</p>
          <p className="text-lg">
            Powered by our Induction Technology, using less than 0.2 Units of
            electricity per cycle. Handling waste costs less than 2 Indian
            Rupees per Kg.
          </p>
        </div>
      </div>

      <div className="md:w-[25%] flex flex-col items-center">
        <div data-aos="zoom-in-up" className=" flex justify-center">
          <div className="flex justify-center rounded-full">
            <img
              src="/feature/3.jpg"
              className="w-[250px] h-[250px] rounded-full"
              alt=""
            />
          </div>
        </div>

        <div className="text-center pt-6 px-8">
          <p className="text-xl font-semibold pb-4">Safe and Monitored</p>
          <p className="text-lg">
            Active Fire-Shield ensures safe containment of fire. Live monitoring
            allows remote control during the waste disposal process.
          </p>
        </div>
      </div>

      <div className="md:w-[25%]">
        <div data-aos="zoom-out-up" className=" flex justify-center">
          <div className="flex justify-center rounded-full">
            <img
              src="/feature/4.jpg"
              className="w-[250px] h-[250px] rounded-full"
              alt=""
            />
          </div>
        </div>
        <div className="text-center pt-6 px-8">
          <p className="text-xl font-semibold pb-4">Convenient Design</p>
          <p className="text-lg text-">
            {`Quiet, compact, and odorless. Neo-X can function all day/night, easily integrating into smart-city infrastructure or waste-collection facilities.`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
