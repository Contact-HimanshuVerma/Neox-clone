import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
    });
  }, []);
  return (
    <>
      <Head>
        <title>Neo San Private Limited | Products</title>
        <meta name="description" content="" />
      </Head>
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
            className="h-[90px] w-1/2 flex justify-center  items-center font-openSans text-2xl text-white bg-blue"
          >
            <h1 className="text-3xl font-openSans  title-font text-white ">
              Neo-X
            </h1>
          </div>
        </div>
      </section>
      <section className=" pb-10 text-zinc-9 bg-lightgray" id="capabilities">
        <div className="md:container  mx-auto">
          <div className="grid mb-14 lg:grid-cols-2 grid-cols-1 md:gap-x-20 gap-4 md:pt- pt-4">
            <div
              className="w-full block h-[10px] md:h-[80px] lg:col-span-2  col-span-1 "
              id="Overview"
            ></div>
            <div className="w-auto">
              <h2 className="text-3xl font-openSans  title-font text-black   mb-4">
                Overview
              </h2>
              <p className="prose text-justify text-black font-openSans pt-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                recusandae omnis molestias facere nemo porro ut voluptatem
                debitis eaque facilis quod, labore dignissimos corporis minus
                maxime, commodi deserunt illum accusantium. Ex eligendi nobis
                aperiam corporis ratione accusamus ab, eos veritatis? Dolores
                eligendi, exercitationem inventore possimus et voluptatem
                veritatis iste reprehenderit nemo nisi excepturi eveniet
                architecto totam at deleniti blanditiis atque itaque debitis
                incidunt? Quaerat nisi cum aliquam animi labore officia sed
                atque obcaecati? Quis, nobis sint dolor ipsam magnam voluptatum.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-once="true"
              className="w-auto h-48 lg:h-[400px] md:mt-16 relative"
            >
              <Image
                layout="fill"
                className="absolute h-[700px] w-full object-cover"
                alt=""
                src="/gallery/2.JPG"
              />
            </div>

            <div
              className="w-full font-openSans block h-[10px] md:h-[80px] lg:col-span-2  col-span-1 "
              id="Technology"
            ></div>
            <div
              data-aos="fade-up"
              data-aos-once="true"
              className="mt-4 h-[300px] md:h-[400px] md:mt-14  relative"
            >
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/gallery/6.jpg"
              />
            </div>

            <div className="w-auto">
              <h2 className="text-3xl font-openSans  title-font text-black   mb-4">
                Technology
              </h2>
              <p className="prose text-justify text-black font-openSans pt-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                recusandae omnis molestias facere nemo porro ut voluptatem
                debitis eaque facilis quod, labore dignissimos corporis minus
                maxime, commodi deserunt illum accusantium. Ex eligendi nobis
                aperiam corporis ratione accusamus ab, eos veritatis? Dolores
                eligendi, exercitationem inventore possimus et voluptatem
                veritatis iste reprehenderit nemo nisi excepturi eveniet
                architecto totam at deleniti blanditiis atque itaque debitis
                incidunt? Quaerat nisi cum aliquam animi labore officia sed
                atque obcaecati? Quis, nobis sint dolor ipsam magnam voluptatum.
              </p>
            </div>

            <div
              className="w-full font-openSans block h-[10px] md:h-[80px] lg:col-span-2  col-span-1 "
              id="Benefits"
            ></div>

            <div className="w-auto">
              <h2 className="text-3xl font-openSans  title-font text-black   mb-4">
                Benefits
              </h2>
              <div className="prose text-justify text-black font-openSans pt-8">
                <div className="">
                  <p>
                    <span className="font-semibold">Easy Setup:</span> Install
                    anywhere waste is generated - homes, offices, schools,
                    public spaces, airports, factories, etc. It operates
                    automatically, making waste disposal hassle-free.
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-semibold"> Energy-efficient :</span>{" "}
                    Powered by our Induction Technology, using less than 0.2
                    Units of electricity per cycle. Handling waste costs less
                    than 2 Indian Rupees per Kg.
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-semibold">Safe and Monitored:</span>{" "}
                    Active Fire-Shield ensures safe containment of fire. Live
                    monitoring allows remote control during the waste disposal
                    process.
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-semibold">Convenient Design:</span>{" "}
                    Quiet, compact, and odorless. Neo-X can function all
                    day/night, easily integrating into smart-city infrastructure
                    or waste-collection facilities.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-once="true"
              className="w-auto h-48 mt-5 lg:h-auto relative"
            >
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/gallery/7.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
