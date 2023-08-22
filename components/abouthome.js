import React from "react";
import Image from "next/image";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function AboutHome() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
    });
  }, []);

  const blog = [
    {
      name: "Balaji V",
      small: "Founder and Managing Partner",
      desc: "Remember, you control your breath, don't let your breath control you! 🧘🏻‍♀️- 🤷🏽‍♀️ - ⬇️",
      imgs: "/team/balaji.png",
    },
    {
      name: "Brindasri K",
      small: "Partner",
      desc: "Don't ever look back, unless it's from a different point of view 🙃 ⬇️",
      imgs: "/team/brindasri.png",
    },
  ];
  const blog1 = [
    {
      name: "Archana Ashok",
      image: "/team/Archana.png",
      role: "Founder & Managing Director",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "Shristi Sarayan",
      image: "/team/sriti.png",
      role: "Founder & Managing Director",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "Kirti Kumar Kotian",
      image: "/team/kirti.png",
      role: "Founder & Managing Director",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "Rakesh Jain",
      image: "/team/rakesh.png",
      role: "Founder & Managing Director",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "Krishna R P",
      image: "/team/krishna.png",
      role: "CEO",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
  ];

  return (
    <>
      <section></section>
      {/* <div className="container mx-auto">
      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          Discover Our Team
        </p>
        <p className="text-base text-black md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </p>
      </div>
      <div className="grid gap-10  sm:grid-cols-2 lg:grid-cols-4 ">
        <div>
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
            <img
              className="absolute object-cover w-full h-full rounded"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt="Person"
            />
          </div>
          <div className="flex flex-col sm:text-center">
            <p className="text-lg font-openSans font-bold">Oliver Aguilerra</p>
            <p className="mb-5 text-xs font-openSans text-black">Product Manager</p>
            <div className="flex items-center space-x-3 sm:justify-center">
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                </svg>
              </a>
              <a
                href="/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>


       
       
      </div>
    </div> */}

      <section
        data-aos="fade-down"
        data-aos-once="true"
        className="bg-lightgray"
      >
        <div className="md:container md:mx-auto py-11 w-full  h-fit  lg:py-16">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            slidesPerGroup={1}
            breakpoints={{
              769: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 20,
                Autoplay: true,
                loop: true,
                speed: 800,

                pagination: {},
              },
              1024: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 20,
                Autoplay: true,
                loop: true,
                speed: 800,

                pagination: {},
              },
            }}
            autoplay={true}
            pagination={{ clickable: true }}
            loop={true}
            speed={1700}
            effect=""
          >
            <SwiperSlide>
              <div>
                <p className="text-3xl font-openSans text-center   title-font text-black   mb-4">
                  Meet The Team
                </p>
              </div>
              <div className="grid gap-10 lg:flex  sm:grid-cols-2 lg:justify-center ">
                {blog.map(({ name, imgs, desc, small }, index) => {
                  return (
                    <div
                      key={index}
                      data-aos="fade-up"
                      data-aos-once="true"
                      className="flex flex-col w-[400px]  h-[400px] items-center p-5"
                    >
                      <div className="relative lg:w-[200px] lg:h-[200px]  md:w-[300px] md:h-[300px] w-[200px]  h-[200px]  rounded-full">
                        <Image
                          className="rounded-full"
                          alt="profle"
                          src={imgs}
                          objectFit="cover"
                          layout="fill"
                        />
                      </div>
                      <h1 className="mt-4 text-xl font-openSans   text-black capitalize font-bold ">
                        {name}
                      </h1>
                      <div className="flex flex-col gap-5 justify-center">
                        <p className=" text-black font-openSans  capitalize text-center  ">
                          {small}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <p className="text-3xl font-openSans text-center   title-font text-black   mb-4">
                  Meet The Team
                </p>
              </div>
              <div className=" flex justify-center flex-col  items-center lg:grid gap-10 mt-16 sm:grid-cols-1 lg:grid-cols-5 ">
                {blog1.map(({ name, imgs, desc, small, image }, index) => {
                  return (
                    <div className="k" key={index}>
                      <div className="relative lg:w-[200px]  lg:h-[200px]  md:w-[200px] md:h-[200px] w-[200px]  h-[200px]  rounded-full">
                        <Image
                          className="rounded-full"
                          alt="profle"
                          src={image}
                          objectFit="cover"
                          layout="fill"
                        />
                      </div>
                      <div className="flex flex-col sm:text-center">
                        <p className="text-lg mt-5 font-openSans font-bold">
                          {name}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="flex justify-center">
            <Link href="/about#meettheteam">
              <button className="mt-4 font-openSans   border-2 border-blue text-blue font-bold text-xs hover:text-white hover:bg-blue p-3 rounded-lg transition-all">
                READ MORE
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
