import React from "react";
import Typewriter from "typewriter-effect";
function SectionOne() {
  return (
    <div className="flex justify-between md:flex-row flex-col md:gap-0 gap-8  md:px-0 px-4 md:basis-[90%] items-center">
      <div className="md:w-[50%] text-lg px-0 md:px-8">
        <div className="text-black min-h-[400px] text-center md:text-left md:min-h-[300px] 2xl:min-h-[350px] text-2xl ">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 5,

              deleteSpeed: 0,
              pauseFor: 2000,
            }}
            onInit={(typewriter) => {
              typewriter

                .typeString("Welcome to Neo-X. <br/> <br/>")
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .typeString(
                  "Say goodbye to the polluting and expensive ways of disposing reject waste. <br/> <br/>"
                )
                .callFunction(() => {
                  console.log("All strings were deleted");
                })

                .typeString(
                  "Embrace the future with Neo-X, a Point of Disposal' Incinerator that hyper-efficiently burns waste that can't be reused, recycled or is toxic. <br/> <br/>"
                )
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .pauseFor(3000)

                .start();
            }}
          />
        </div>
        {/* <p className="pb-4"> </p> */}
        {/* {`Embrace the future with Neo-X, a Point of Disposal' Incinerator that hyper-efficiently burns waste that can't be reused, recycled or is toxic`} */}
      </div>

      <div className="md:w-[50%]">
        <div className="md:block  hidden">
          <iframe
            width="740"
            height="400"
            src="https://www.youtube.com/embed/yqE-4JDXYU4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-2xl"
          ></iframe>
        </div>
        <div className="md:hidden block">
          <iframe
            width="350"
            height="300"
            src="https://www.youtube.com/embed/yqE-4JDXYU4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
