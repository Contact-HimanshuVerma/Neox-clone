import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    mode: "onChange",
  });
  const [message, setMessage] = useState(false);
  const isButtonVisble =
    watch("name") &&
    watch("email") &&
    watch("phone") &&
    watch("org") &&
    watch("mess");

  const submit = handleSubmit(async (data) => {
    const { name, email, phone, org, mess } = data;

    try {
      const response = await fetch(
        "https://6mrtw63ugspyyaiqos7kskd3hm0rgmlm.lambda-url.ap-south-1.on.aws/",

        {
          method: "POST",
          headers: {},
          body: JSON.stringify({
            type: "contact",
            name,
            email,
            phone,
            org,
            mess,
          }),
        }
      );
      if (response.status === 200) {
        reset({
          name: "",
          phone: "",
          email: "",
          org: "",
          mess: "",
        });

        setMessage(true);
        // toast.success(
        //   "Your message is sent. We'll get back to you at the earliest"
        // );
      } else {
        throw Error("Error while sending message");
      }
    } catch (error) {
      alert("Some thing went wrong");
    }
  });

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <>
      <Head>
        <title>Neo San Private Limited | Contact</title>
        <meta name="description" content="Contact Us" />
      </Head>

      <section
        style={{
          backgroundImage: `url(${"/gallery/8.jpg"})`,
          backgroundSize: "cover",
          objectFit: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="pt-4  font-OpenSans pb-12 text-zinc-900 bg-coustom1"
      >
        <div className="md:container  mx-auto">
          <div className="flex flex-col-reverse md:flex-row justify-between items-start rounded pt-2 ">
            <div className="md:w-2/5 px-4 md:px-0  md:mt-0 mt-10 w-full">
              <p className="text-2xl  font-semibold md:text-r text-white text-left  ">
                Neo San Private Limited
              </p>
              <div className="grid gap-5 grid-cols-1 ">
                <div className="text-base pt-2  md:text-left text-center text-white ">
                  <img src="/contact.png" alt="" />
                </div>
              </div>

              <div className="text-white pt-20">
                <div className=" p-4 lg:p-0 pl-6  font-openSans text-left">
                  {/* <p className="font-semibold">CONTACT</p> */}

                  <p>Neo San Private Limited</p>
                  <p>NO 97, 2ND STAGE INDUSTRIAL SUBRB TNMKUR ROAD,</p>
                  <p>BENGALURU, Bengaluru (Bangalore) Urban</p>
                  <p>Karnataka, 560022</p>
                </div>
              </div>

              <div className="text-white">
                {" "}
                <div className=" p-4 lg:p-0 pl-6   font-openSans text-left">
                  {/* <p className="font-semibold">CONTACT</p> */}

                  <p className="">Phone : +919148297040</p>
                  <p className="">Email : info@neosanitation.net</p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 w-full">
              <div className="md:pl-12 md:pt-0 pt-12">
                <h2 className="text-2xl text-white px-4 md:px-0 ">
                  Write to us
                </h2>
                <div className="mt-8">
                  <div className="lg:grid px-4 md:px-0 flex flex-col justify-center lg:grid-cols-2 gap-x-6 gap-y-3">
                    <div className="flex flex-col">
                      <span className="text-white text-lg">Name</span>
                      <input
                        type="text"
                        className="block pl-2 w-full h-[50px] rounded-sm  border border-blue   focus:border-blue focus:ring focus:ring-blue en focus:ring-opacity-50"
                        placeholder=""
                        {...register("name", {
                          required: true,
                        })}
                      />

                      <label
                        className={`text-red-600   text-xs py-1 ${
                          errors.name ? "visible" : "invisible"
                        }`}
                      >
                        This field is required
                      </label>
                    </div>
                    <label className="block">
                      <span className="text-white text-lg">Email</span>
                      <input
                        type="email"
                        className=" block w-full pl-2 rounded-sm border border-blue  h-[50px]   focus:border-blue focus:ring focus:ring-blue en focus:ring-opacity-50"
                        placeholder=""
                        {...register("email", {
                          required: true,
                          pattern:
                            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        })}
                      />
                      <label
                        className={`text-red-600   text-xs py-1 ${
                          errors.email ? "visible" : "invisible"
                        }`}
                      >
                        {errors.email?.type == "required"
                          ? "This field is required"
                          : "Enter a valid email address"}
                      </label>
                    </label>
                    <label className="block">
                      <span className="text-white text-lg">Phone</span>
                      <input
                        type="text"
                        className=" block pl-2 rounded-sm w-full h-[50px] border border-blue  focus:border-blue focus:ring focus:ring-blue en focus:ring-opacity-50"
                        placeholder=""
                        {...register("phone", {
                          required: true,
                          minLength: 10,
                        })}
                        autoComplete="tel"
                      />
                      <label
                        className={`text-red-600   text-xs py-1 ${
                          errors.phone ? "visible" : "invisible"
                        }`}
                      >
                        {errors.phone?.type == "required"
                          ? "This field required"
                          : "Enter a valid phone number with at least 10 digits"}
                      </label>
                    </label>
                    <div className="flex flex-col">
                      <span className="text-white text-lg">Organization</span>
                      <input
                        type="text"
                        className="block pl-2  w-full h-[50px] rounded-sm  border border-blue   focus:border-blue focus:ring focus:ring-blue en focus:ring-opacity-50"
                        placeholder=""
                        {...register("org", {
                          required: true,
                        })}
                      />

                      <label
                        className={`text-red-600   text-xs py-1 ${
                          errors.org ? "visible" : "invisible"
                        }`}
                      >
                        This field is required
                      </label>
                    </div>
                  </div>
                  <label className="block px-4 md:px-0  mt-6">
                    <span className="text-white text-lg">
                      Enter Your Message
                    </span>
                    <textarea
                      className="mt-1 py-1 pl-2 block w-full border border-blue  h-28 rounded-sm  -700 focus:border-blue focus:ring focus:ring-blue en focus:ring-opacity-50"
                      rows="3"
                      {...register("mess", {
                        required: true,
                      })}
                    ></textarea>
                    <label
                      className={`text-red-600   text-xs py-1 ${
                        errors.mess ? "visible" : "invisible"
                      }`}
                    >
                      This field is required
                    </label>
                  </label>
                  <div className="w-full flex flex-col justify-center items-center">
                    <div className="text-white">
                      {message
                        ? "Your message is sent. We'll get back to you at the earliest."
                        : ""}
                    </div>
                    <button
                      onClick={submit}
                      disabled={!isButtonVisble}
                      className={`w-32 mt-6 bg-blue rounded-lg text-white border-2 border-white hover:text-white hover:bg-blue font-bold text-xs   p-3  transition-all ${
                        isButtonVisble ? "opacity-100" : "opacity-80 "
                      }`}
                    >
                      SEND
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15548.328810502753!2d77.5303104!3d13.0304371!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d14d261f123%3A0x5da9e4e75f954543!2s560022%2C%20Industrial%20Suburb%202nd%20Stage%2C%20Goraguntepalya%2C%20Yeswanthpur%2C%20Bengaluru%2C%20Karnataka%20560058!5e0!3m2!1sen!2sin!4v1691395268394!5m2!1sen!2sin"
          width="100%"
          height="600"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
