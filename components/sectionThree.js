import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
function SectionThree() {
  return (
    <div className="flex flex-col justify-center py-14 basis-[90%] items-center">
      <p className="text-2xl pt-8 pb-14 lg:text-4xl">Emission Comparisons</p>
      <div data-aos="zoom-in-up" className="w-[70%]">
        <img src="/graph.png" alt="ad" className="object-contain" />
      </div>
      <div className="pt-14">
        <a
          target="_blank"
          rel="noreferrer"
          href={
            "https://www.neosanitation.net/_files/ugd/3f8eaa_c37de4f357d34d979ed007a28a136d8a.pdf"
          }
        >
          <motion.button
            className="px-4 py-2 rounded-md border-blue border-2 text-lg hover:bg-blue hover:text-white"
            whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
            whileTap={{ scale: 0.95 }}
          >
            View Report
          </motion.button>
        </a>
      </div>
    </div>
  );
}

export default SectionThree;
