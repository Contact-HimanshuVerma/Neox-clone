import { useRef, useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import { Animation, Typer } from "react-easy-animations";

const BackgroundImage = ({ image }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    const section = sectionRef.current;

    img.onload = () => {
      const imgheight = window.innerWidth * (img.height / img.width);
      if (section) {
        section.style.height = `${imgheight}px`;
        section.style.backgroundImage = `url(${image})`;
        section.style.backgroundSize = "cover";
        section.style.backgroundPosition = "center";
        section.style.backgroundRepeat = "no-repeat";
      }
    };
  }, [image]);

  return (
    <section
      ref={sectionRef}
      className="md:h-[1190px] md:block hidden relative -top-32 h-[950px] w-full bg-black"
    >
      <div className="md:container md:mx-auto flex md:pt-0 pt-[100%] md:h-fit lg:h-full md:justify-center  items-center pt-">
        <div className="text-black  md:w-[70%] w-[100%]   text-center   md:pt-24   md:h-fit leading-none flex flex-col gap-5 text-2xl md:text-2xl font-openSans">
          <div className="text-white min-h-[360px] text-2xl">
            <div class="animate-slide-in-down-delay">
              Air Pollution, Toxic emissions, Soil Contamination,
            </div>

            <div class="animate-slide-in-down-delay">
              Water Pollution, Public Health Risks.
            </div>
            <br />
            <div class="animate-slide-in-down-delay-2">
              All these hazards have a common source.
            </div>

            <div class="animate-slide-in-down-delay-2">
              Burning reject waste in the open.
            </div>
            <br />
            <div class="animate-slide-in-down-delay-3">
              You can change this.
            </div>

            <div class="animate-slide-in-down-delay-3">
              Scroll down to know more.
            </div>

            {/* <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 10,
                deleteSpeed: -10,
                pauseFor: 2000,
              }}
              onInit={(typewriter) => {
                typewriter

                  .typeString("Air Pollution, ")

                  .callFunction(() => {
                    console.log("String typed out!");
                  })

                  .typeString("Toxic emissions, ")
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })

                  .typeString("Soil Contamination, <br/>")
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })

                  .typeString("Water Pollution,  ")
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })

                  .typeString("Public Health Risks. <br/> <br/> ")
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })

                  .typeString("All these hazards have a common source. <br/> ")
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })

                  .typeString("Burning reject waste in the open.<br/> <br/>")
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })

                  .typeString("You can change this. <br/> ")
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })

                  .typeString("Scroll down to know more. <br/>")
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })

                  .pauseFor(3000)
                  .start();
                <BsChevronDown color="black" size={70} />;
              }}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundImage;
