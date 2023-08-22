import { React, useState } from "react";
import AdocFac from "./faq/adocFaq";
import AdatFaq from "./faq/AdatFaq";
export default function Fac() {
  const [SwitchTab, setSwitchTab] = useState(true);
  const clickOnTabsAdoc = () => {
    setSwitchTab(false);
  };
  const clickOnTabsAdat = () => {
    setSwitchTab(true);
  };

  return (
    <>
      <section>
        <div
          className="h-80 flex flex-col justify-end "
          style={{
            backgroundImage: "url('/gallery/8.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            data-aos="fade-down"
            data-aos-once="true"
            className="lg:h-[90px] h-[100px]  w-fit md:w-1/2 flex justify-center  items-center font-openSans text-2xl text-white bg-blue"
          >
            <div className=" md:text-3xl  md:p-0 p-4 font-openSans  title-font text-white">
              Frequently Asked Questions
            </div>
          </div>
        </div>
      </section>
      <div className="md:container pt-4 pb-5 flex flex-col gap-5  md:mx-auto">
        <AdatFaq />
      </div>
    </>
  );
}
