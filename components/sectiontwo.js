import React from "react";

function SectionTwo() {
  return (
    <>
      <div className="flex justify-between  md:flex-row flex-col  gap-8  md:px-0 px-2 md:basis-[90%] md:gap-4 items-center">
        <div
          data-aos="fade-right"
          className="md:w-[50%]   rounded-md  flex flex-col px-8 py-4 ease-in duration-150 hover:scale-[1.02] transition-all "
        >
          <div className="flex ">
            <div>
              <img src="/reject2.png" alt="reject waste" />
            </div>
          </div>
        </div>

        <div
          data-aos="fade-left"
          className="md:w-[50%] text-black  text-xl h-full px-8  rounded-md gap-8 p-5 ease-in duration-150 justify-center items-center hover:scale-[1.02] flex flex-col g transition-all "
        >
          <p>
            All this needs to be carefully incinerated, either because of its
            material, or its use or because recycling this item is highly energy
            consuming.
          </p>
          <p>
            {`Most of these materials contain complex chemical compounds (in
          plastics), and need to go through a chemical process under certain
          conditions, so that they don't pollute.`}
          </p>
          <p>
            {` Most of these materials contain complex chemical compounds (in
          plastics), and need to go through a chemical process under certain
          conditions, so that they don't pollute.`}
          </p>
          <p>
            Right now most of our waste ends up burning in landfills/open fires,
            at temperatures of ~400°C, which is extremely harmful for us and
            everything around.
          </p>
        </div>
      </div>
    </>
  );
}

export default SectionTwo;
