import Link from "next/link";
import { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

export default function Testimonials() {
  // const [swiperRef, setSwiperRef] = useState(0);
  // const prevHandler = () => {
  //   swiperRef.slidePrev();
  // };
  // const nextHandler = () => {
  //   swiperRef.slideNext();
  // };
  const stuff = [
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      name: "Jon Green ",
      position: "Managing Director",
      company: "Jonathan Morgan & Company Limited ",
      logo: "/testimonial1.png",
      id: 1,
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      name: "Christy Joseph",
      position: "Director",
      company: "Door Valley      ",
      logo: "/testimonial2.png",
      id: 2,
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      name: "Catherine Mandungu",
      position: "Director ",
      company: "Think RevOps Ltd",
      logo: "/testimonial3.png",
      id: 3,
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      name: "Rashed Chowdhury",
      position: "Advisior ",
      company: "Sales Hub - Trac Anything",
      logo: "/testimonial3.png",
      id: 4,
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      name: "Marissa Gillette  ",
      position: "CEO and Chief Executive Office ",
      company: "Summit Valuation Services",
      logo: "/testimonial3.png",
      id: 5,
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      name: "Dilpreet   ",
      position: " Owner      ",
      company: "Commercial Real estate ",
      logo: "/testimonial3.png",
      id: 6,
    },
  ];

  return (
    <>
      {" "}
      <section className="p-4 md:pt-12     bg-blue        font-OpenSans relative">
        <div className="w-full flex gap-4 pt-10 md:pt-0 justify-center ">
          {/* <span className="inline-block w-20 h-[2px] mt-5 rounded-full bg-white"></span> */}
          <h1 className=" capitalize text-3xl  text-white        font-OpenSans lg:text-4xl   text-center ">
            What Our Customers say
          </h1>
          {/* <span className="inline-block w-20 h-[2px] rounded-full mt-5 bg-white"></span> */}
        </div>
        <div className="md:container mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={false}
            autoplay={true}
            loop={true}
            speed={800}
            spaceBetween={15}
            // onSwiper={(swiper) => setSwiperRef(swiper)}
            breakpoints={{
              240: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1000: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
            }}
          >
            {stuff.map(({ text, name, position, company, logo, id }) => (
              <SwiperSlide key={id}>
                <div className="w-full            font-OpenSans relative flex justify-center items-center">
                  <div className="md:container mx-auto    flex flex-col  items-center pt-8 2xl:h-[50vh]">
                    <p className="text-lg pt-4  text-center  text-white font-semibold">
                      {name} - <span className="font-light">{position}</span>
                    </p>
                    <p className="pt-1 text-md pb-8 text-white">{company}</p>
                    <p className="md:text-lg  md:w-[100%] text-sm text-white md:leading-10 text-center ">
                      {text}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
