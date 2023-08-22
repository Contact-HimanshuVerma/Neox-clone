import Image from "next/image";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Clients() {
  const logos = [
    "/clients/1.png",
    "/clients/2.png",
    "/clients/3.jpg",
    "/clients/4.png",
    "/clients/5.png",
    "/clients/6.jpg",
    "/clients/7.jpeg",
    "/clients/8.jpg",
    "/clients/9.png",
    "/clients/10.jpg",
    "/clients/11.jpg",
  ];

  return (
    <section className=" md:pt-14 pt-9    pb-5  font-OpenSans bg-white  relative">
      <div className="flex gap-4 justify-center mb-8 ">
        {/* <span className="inline-block w-20 h-[2px] mt-5 rounded-full bg-black"></span> */}
        <h1 className="text-3xl  capitalize lg:text-4xl text-black  text-center">
          Our Partners
        </h1>
        {/* <span className="inline-block w-20 h-[2px] rounded-full mt-5 bg-black"></span> */}
      </div>

      <div className="lg:container  mx-auto  lg:pb-5">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={40}
          slidesPerGroup={2}
          breakpoints={{
            768: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 20,
              Autoplay: true,
              loop: true,
              speed: 800,

              pagination: {},
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 20,
              Autoplay: true,
              loop: true,
              speed: 1200,

              pagination: {},
            },
          }}
          // breakpoints={{
          //   768: {
          //     slidesPerView: "auto",
          //   },
          //   1024: {},
          // }}
          autoplay={true}
          loop={true}
          speed={1200}
        >
          {logos.map((x, index) => (
            <SwiperSlide key={index}>
              <div className="h-36 w-auto  relative cursor-pointer">
                <Image
                  layout="fill"
                  alt=""
                  src={x}
                  className="absolute inset-0 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
